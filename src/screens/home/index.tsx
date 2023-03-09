import { StatusBar } from "expo-status-bar";
import { Image } from "expo-image";
import { View, ScrollView } from "react-native";
import { Colors, Spacing } from "../../styles";
import { SoundList } from "../../utils/constants";
import IconButton from "../../components/IconButton";
import * as Haptics from "expo-haptics";
import SoundCard from "../../components/SoundCard";
import styles from "./style";
//  Redux
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { setPlayAll } from "../../store/playAll";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const { playAll } = useSelector((state: RootState) => state.playAll);

  const handlePress = () => {
    dispatch(setPlayAll(!playAll));
    console.log("PlayAll: ", playAll);
  };

  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor={Colors.BLACK} style="light" />
      <View style={styles.heading}>
        <Image
          style={styles.headerLogo}
          source={require("../../../assets/images/logo.svg")}
          contentFit="contain"
        ></Image>
        <View style={styles.headingRight}>
          <IconButton
            iconPath={require("../../../assets/images/hamburger.svg")}
            iconStyle={styles.headerIcons}
            contentFit={"contain"}
            onPress={() => {
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
            }}
          />
          <IconButton
            iconPath={require("../../../assets/images/settings.svg")}
            iconStyle={[styles.headerIcons, { marginLeft: Spacing.SCALE_24 }]}
            contentFit={"contain"}
            onPress={() => {
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
            }}
          />
        </View>
      </View>
      <ScrollView style={styles.container}>
        {SoundList.map((prop, key) => {
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
        iconPath={require("../../../assets/images/play.svg")}
        containerStyle={styles.playButtonContainer}
        iconStyle={styles.playButton}
        contentFit={"contain"}
        onPress={handlePress}
      />
    </View>
  );
};

export default HomeScreen;
