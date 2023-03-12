import { Text, View } from "react-native";
import styles from "./styles";

export type Props = {
  name: string;
  index?: number;
};

const PlaylistCard: React.FC<Props> = ({ name }) => {
  return (
    <View style={styles.playlistCard}>
      <Text style={styles.playlistCardText}>{name}</Text>
    </View>
  );
};

export default PlaylistCard;
