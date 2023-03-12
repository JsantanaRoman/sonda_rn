import * as Haptics from "expo-haptics";
import { Image } from "expo-image";
import { StatusBar } from "expo-status-bar";
import { ScrollView, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { IconButton, SoundCard } from "_components";
import { RootState } from "_store";
import { Colors, Spacing } from "_styles";
import { Constants } from "_utils";
import { setPlayAll } from "../../store/playAll";
import styles from "./style";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const { playAll } = useSelector((state: RootState) => state.playAll);

  const handlePress = () => {
    dispatch(setPlayAll(!playAll));
  };

  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor={Colors.BLACK} style="light" />
      <View style={styles.heading}>
        <Image
          style={styles.headerLogo}
          source={require("../../assets/images/logo.svg")}
          contentFit="contain"
        ></Image>
        <View style={styles.headingRight}>
          <IconButton
            iconPath={require("../../assets/images/hamburger.svg")}
            iconStyle={styles.headerIcons}
            contentFit={"contain"}
            onPress={() => {
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
            }}
          />
          <IconButton
            iconPath={require("../../assets/images/settings.svg")}
            iconStyle={[styles.headerIcons, { marginLeft: Spacing.SCALE_24 }]}
            contentFit={"contain"}
            onPress={() => {
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
            }}
          />
        </View>
      </View>
      <ScrollView style={styles.container}>
        {Constants.SoundList.map((prop, key) => {
          return (
            <SoundCard
              name={prop.name}
              key={key}
              soundPath={prop.soundPath}
              available={prop.available}
            />
          );
        })}
      </ScrollView>
      <IconButton
        iconPath={
          !playAll
            ? require("../../assets/images/play.svg")
            : require("../../assets/images/pause.svg")
        }
        containerStyle={styles.playButtonContainer}
        iconStyle={styles.playButton}
        contentFit={"contain"}
        onPress={handlePress}
      />
    </View>
  );
};

export default HomeScreen;
