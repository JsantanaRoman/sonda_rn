import { StyleSheet } from "react-native";
import { Colors } from "_styles";
import { FONT_FAMILY_REGULAR } from "../../styles/typography";

const styles = StyleSheet.create({
  sondaPlusTextContainer: {
    display: "flex",
    flexDirection: "row",
  },
  sondaPlusTextOne: {
    color: Colors.WHITE,
    fontSize: 24,
    fontFamily: FONT_FAMILY_REGULAR,
  },
  sondaPlusTextTwo: {
    color: Colors.WHITE,
    fontSize: 20,
    fontFamily: FONT_FAMILY_REGULAR,
    paddingVertical: 2,
    paddingHorizontal: 15,
  },
  sondaPlusTextTwoContainer: {
    marginLeft: 2,
    borderRadius: 51,
    borderColor: Colors.PRIMARY,
    borderWidth: 2,
  },
});

export default styles;
