import { Image } from "expo-image";
import { Audio } from "expo-av";
import * as Haptics from "expo-haptics";
import { useState } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Spacing, Colors } from "../styles";
import { FONT_WEIGHT_REGULAR } from "../styles/typography";
import CustomSlider from "./CustomSlider";

export type Props = {
  name: string;
  index?: number;
  soundPath: NodeRequire;
  available: boolean;
};

const SoundCard: React.FC<Props> = ({ name, available, soundPath }) => {
  const [isVolumeOn, setIsVolumeOn] = useState(false);

  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(soundPath);
    await sound.playAsync();
  };

  const stopSound = async () => {
    const { sound } = await Audio.Sound.createAsync(soundPath);
    await sound.pauseAsync();
    sound.unloadAsync();
  };

  return (
    <View>
      {!available && (
        <>
          <Pressable
            style={styles.lockContainer}
            onPress={() => {
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
              console.log("Modal PopUp");
            }}
          >
            <Image
              style={styles.lockIcon}
              contentFit="contain"
              source={require("../assets/images/lock.svg")}
            />
          </Pressable>
          <View style={styles.locked}></View>
        </>
      )}
      <View style={styles.card}>
        <View>
          <Text style={styles.cardHeading}>{name}</Text>
        </View>
        <View style={styles.audioContainer}>
          <Pressable
            style={styles.audioButton}
            onPress={async () => {
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
              setIsVolumeOn(!isVolumeOn);
              !isVolumeOn ? playSound() : stopSound();
            }}
          >
            <Image
              style={styles.buttonIcon}
              contentFit="contain"
              source={
                isVolumeOn
                  ? require("../assets/images/volume-on.svg")
                  : require("../assets/images/volume-off.svg")
              }
            />
          </Pressable>
          <CustomSlider />
        </View>
      </View>
    </View>
  );
};

export default SoundCard;

const styles = StyleSheet.create({
  card: {
    height: 125,
    width: "100%",
    backgroundColor: "#181818",
    borderRadius: 16,
    display: "flex",
    flexDirection: "column",
    marginBottom: Spacing.SCALE_8,
  },
  cardHeading: {
    fontSize: 40,
    fontWeight: FONT_WEIGHT_REGULAR,
    color: Colors.WHITE,
    paddingVertical: Spacing.SCALE_8,
    paddingHorizontal: Spacing.SCALE_16,
  },
  audioContainer: {
    display: "flex",
    flexDirection: "row",
    marginHorizontal: Spacing.SCALE_8,
    borderRadius: 12,
  },
  audioButton: {
    backgroundColor: "#1C1C1C",
    height: 47,
    width: 73,
    marginLeft: Spacing.SCALE_8,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
  },
  buttonIcon: {
    width: 21,
    height: 17,
  },
  locked: {
    position: "absolute",
    left: 0,
    top: 0,
    zIndex: 1,
    opacity: 0.8,
    backgroundColor: Colors.BLACK,
    height: 125,
    width: "100%",
    borderRadius: 12,
  },
  lockContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    zIndex: 2,
    height: 48,
    width: 48,
    borderRadius: 50,
    position: "absolute",
    backgroundColor: Colors.BLACK,
    margin: "auto",
    top: 62.5,
  },
  lockIcon: {
    height: 26,
    width: 20,
    zIndex: 3,
  },
});
