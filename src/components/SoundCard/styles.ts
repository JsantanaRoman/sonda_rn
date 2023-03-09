import { StyleSheet } from "react-native";
import { Spacing, Colors } from "../../styles";
import { FONT_WEIGHT_REGULAR } from "../../styles/typography";

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
    tintColor: "red",
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

export default styles;
