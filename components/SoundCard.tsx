import { Image } from "expo-image";
import { Audio } from "expo-av";
import * as Haptics from "expo-haptics";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Spacing, Colors } from "../styles";
import { FONT_WEIGHT_REGULAR } from "../styles/typography";
import { useRef, useState } from "react";
import { Slider } from "@miblanchard/react-native-slider";

export type Props = {
  name: string;
  index?: number;
  soundPath: NodeRequire;
  available: boolean;
};

const SoundCard: React.FC<Props> = ({ name, available, soundPath }) => {
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0);
  const sound = useRef(new Audio.Sound());

  const PlayAudio = async () => {
    await sound.current.loadAsync(soundPath);
    sound.current.playAsync();
    sound.current.setStatusAsync({ isLooping: true });
    setPlaying(true);
  };

  const PauseAudio = async () => {
    sound.current.pauseAsync();
    await sound.current.unloadAsync();
    setPlaying(false);
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
              playing ? PauseAudio() : PlayAudio();
            }}
          >
            <Image
              style={styles.buttonIcon}
              contentFit="contain"
              source={
                playing
                  ? require("../assets/images/volume-on.svg")
                  : require("../assets/images/volume-off.svg")
              }
            />
          </Pressable>
          <View style={styles.sliderContainer}>
            <Slider
              value={volume}
              // @ts-ignore
              onValueChange={(value: Array<number>) => {
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                sound.current.setStatusAsync({ volume: value[0] });
                setVolume(Number(value[0]));
              }}
              animateTransitions={true}
              trackStyle={styles.trackStyle}
              minimumTrackTintColor={Colors.PRIMARY}
              maximumTrackTintColor={"#242424"}
              thumbStyle={styles.thumbStyle}
              minimumValue={0}
              maximumValue={1}
            />
          </View>
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
  sliderContainer: {
    flex: 1,
    marginRight: Spacing.SCALE_8,
    alignItems: "stretch",
    justifyContent: "center",
  },
  trackStyle: {
    height: 47,
    borderRadius: 12,
  },
  thumbStyle: {
    backgroundColor: "transparent",
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
