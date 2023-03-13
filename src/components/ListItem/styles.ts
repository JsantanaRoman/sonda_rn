import { StyleSheet } from "react-native";
import { Spacing } from "_styles";

const styles = StyleSheet.create({
  listItemContainer: {
    borderBottomColor: "#262626",
    borderBottomWidth: 1,
    paddingVertical: Spacing.SCALE_16,
    display: "flex",
    flexDirection: "row",
  },
  listItemIcon: {
    width: 19,
    height: 19,
    marginRight: Spacing.SCALE_16,
  },
  listItemText: {
    fontSize: 17,
    lineHeight: 19,
    color: "#D7D7D7",
  },
});

export default styles;
