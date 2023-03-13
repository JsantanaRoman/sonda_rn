import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

export type Props = {
  text: string;
  onPress?: any;
};

const BaseButton: React.FC<Props> = ({ text, onPress }) => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
      <View style={styles.baseButton}>
        <Text style={styles.baseButtonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default BaseButton;
