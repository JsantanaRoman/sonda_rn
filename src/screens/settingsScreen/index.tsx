import { useRouter } from "expo-router";
import { Text, View } from "react-native";
import { IconButton, SondaPlusText } from "../../components";
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
        <View>
          <View>
            <Text>$13</Text>
            <Text>Per Year</Text>
            <Text>Supporter</Text>
          </View>
          <View>
            <Text>$45</Text>
            <Text>Lifetime</Text>
            <Text>Beliver</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SettingsScreen;
