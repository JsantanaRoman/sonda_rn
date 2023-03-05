import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Spacing, Colors } from "../styles";
import { FONT_WEIGHT_REGULAR } from "../styles/typography";

export type Props = {
  name: string;
  index?: number;
};

const SoundCard: React.FC<Props> = ({ name }) => {
  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.cardHeading}>{name}</Text>
      </View>
      <View style={styles.audioContainer}>
        <Pressable
          style={styles.audioButton}
          onPress={() => console.log("Clicked")}
        >
          <Image
            style={styles.buttonIcon}
            contentFit="contain"
            source={require("../assets/images/volume-on.svg")}
          />
        </Pressable>
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
  audioSlider: {},
});
