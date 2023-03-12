import { LinearGradient } from "expo-linear-gradient";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

export type Props = {
  name: string;
  price: string;
  term: string;
};

const PlanCard: React.FC<Props> = ({ name, price, term }) => {
  return (
    <TouchableOpacity onPress={() => {}}>
      <LinearGradient
        start={[0, 0]}
        end={[0, 1]}
        colors={false ? ["#FF8862", "#FF9D66"] : ["#262626", "#262626"]}
        style={{ borderRadius: 16 }}
      >
        <View style={styles.planCard}>
          <Text style={styles.planCardPrice}>{price}</Text>
          <Text style={styles.planCardTerm}>{term}</Text>
          <Text style={styles.planCardName}>{name}</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default PlanCard;
