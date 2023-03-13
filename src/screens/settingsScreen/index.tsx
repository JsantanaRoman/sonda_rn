import { useRouter } from "expo-router";
import { Text, View } from "react-native";
import {
  IconButton,
  ListItem,
  MembershipPicker,
  SondaPlusText,
} from "_components";
import styles from "./style";

const SettingsScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Settings</Text>
        <IconButton
          iconPath={require("../../assets/images/close.svg")}
          iconStyle={styles.closeIcon}
          contentFit={"contain"}
          onPress={() => {
            router.back();
          }}
        />
      </View>
      <View style={styles.contentContainer}>
        <SondaPlusText />
        <MembershipPicker />
        <ListItem
          text="Restore purchase"
          iconPath={require("../../assets/images/money.svg")}
        />
        <ListItem
          text="See Features"
          iconPath={require("../../assets/images/stars.svg")}
        />
      </View>
    </View>
  );
};

export default SettingsScreen;
