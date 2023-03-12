import { useRouter } from "expo-router";
import { Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { IconButton, SondaPlusText, PlanCard } from "_components";
import { RootState } from "_store";
import styles from "./style";

const SettingsScreen = () => {
  const dispatch = useDispatch();
  const { playAll } = useSelector((state: RootState) => state.playAll);
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
        <View style={styles.planCardsContainer}>
          <PlanCard name={"Supporter"} price={"$13"} term={"Per Year"} />
          <PlanCard name={"Beliver"} price={"$45"} term={"Lifetime"} />
        </View>
      </View>
    </View>
  );
};

export default SettingsScreen;
