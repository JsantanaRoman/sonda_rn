import { StatusBar } from "expo-status-bar";
import { Image } from "expo-image";
import { View, ScrollView } from "react-native";
import { Colors, Spacing } from "../../styles";
import { SoundList } from "../../utils/constants";
import IconButton from "../../components/IconButton";
import * as Haptics from "expo-haptics";
import Message from "../../components/message";
import SoundCard from "../../components/SoundCard";
import styles from "./style";

const HomeScreen = () => {
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
      <Message />
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
      />
    </View>
  );
};

export default HomeScreen;
