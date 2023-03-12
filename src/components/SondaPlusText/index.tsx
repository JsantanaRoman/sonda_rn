import { View, Text } from "react-native";
import styles from "./styles";

const SondaPlusText: React.FC = () => {
  return (
    <View style={styles.sondaPlusTextContainer}>
      <Text style={styles.sondaPlusTextOne}>Sonda</Text>
      <View style={styles.sondaPlusTextTwoContainer}>
        <Text style={styles.sondaPlusTextTwo}>Plus</Text>
      </View>
    </View>
  );
};

export default SondaPlusText;
