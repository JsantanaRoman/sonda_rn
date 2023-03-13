import { Image, ImageSource } from "expo-image";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

export type Props = {
  text: string;
  onPress?: any;
  iconPath: ImageSource;
};

const ListItem: React.FC<Props> = ({ text, iconPath, onPress }) => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
      <View style={styles.listItemContainer}>
        <Image
          style={styles.listItemIcon}
          source={iconPath}
          contentFit="contain"
        ></Image>
        <Text style={styles.listItemText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;
