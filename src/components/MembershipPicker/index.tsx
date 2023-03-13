import { LinearGradient } from "expo-linear-gradient";
import { Text, Pressable, View } from "react-native";
import styles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "_store";
import { setMembershipSelected } from "../../store/slices/membershipSelected";
import BaseButton from "../BaseButton";

const MembershipPicker: React.FC = () => {
  const dispatch = useDispatch();
  const { membershipSelected } = useSelector(
    (state: RootState) => state.membershipSelected
  );

  const handlePress = () => {
    dispatch(
      setMembershipSelected(
        membershipSelected === "Supporter" ? "Beliver" : "Supporter"
      )
    );
  };
  return (
    <View>
      <View style={styles.planCardsContainer}>
        <Pressable
          onPress={() => {
            handlePress();
          }}
        >
          <LinearGradient
            start={[0, 0]}
            end={[0, 1]}
            colors={
              membershipSelected === "Supporter"
                ? ["#EC6539", "#FF8862", "#FF9D66"]
                : ["#262626", "#262626"]
            }
            style={{ borderRadius: 16 }}
          >
            <View style={styles.planCard}>
              <Text style={styles.planCardPrice}>$13</Text>
              <Text style={styles.planCardTerm}>Per Year</Text>
              <Text style={styles.planCardName}>Supporter</Text>
            </View>
          </LinearGradient>
        </Pressable>
        <Pressable
          onPress={() => {
            handlePress();
          }}
        >
          <LinearGradient
            start={[0, 0]}
            end={[0, 1]}
            colors={
              membershipSelected === "Beliver"
                ? ["#EC6539", "#FF8862", "#FF9D66"]
                : ["#262626", "#262626"]
            }
            style={{ borderRadius: 16 }}
          >
            <View style={styles.planCard}>
              <Text style={styles.planCardPrice}>$45</Text>
              <Text style={styles.planCardTerm}>Lifetime</Text>
              <Text style={styles.planCardName}>Believer</Text>
            </View>
          </LinearGradient>
        </Pressable>
      </View>
      <BaseButton
        text={
          membershipSelected === "Supporter"
            ? "Pay Yearly"
            : "Get Lifetime Access"
        }
        onPress={null}
      />
    </View>
  );
};

export default MembershipPicker;
