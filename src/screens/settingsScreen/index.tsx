import { useRouter } from "expo-router";
import { Text, View } from "react-native";
import { IconButton, MembershipPicker, SondaPlusText } from "_components";
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
      </View>
    </View>
  );
};

export default SettingsScreen;
