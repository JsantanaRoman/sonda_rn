import { View } from "react-native";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";

const PlaylistsScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Link href="../">Dismiss</Link>
      <StatusBar style="light" />
    </View>
  );
};

export default PlaylistsScreen;
