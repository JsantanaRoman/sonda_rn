import { useRouter } from "expo-router";
import { FlatList, Text, View } from "react-native";
import { IconButton } from "_components";
import { PlaylistCard } from "_components";
import { Constants } from "_utils";
import styles from "./style";

const PlaylistsScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Playlist</Text>
        <IconButton
          iconPath={require("../../assets/images/close.svg")}
          iconStyle={styles.closeIcon}
          contentFit={"contain"}
          onPress={() => {
            router.back();
          }}
        />
      </View>
      <FlatList
        contentContainerStyle={styles.contentContainer}
        data={Constants.PlaylistList}
        horizontal={false}
        numColumns={2}
        renderItem={({ item, index }) => (
          <PlaylistCard name={item.name} key={index} />
        )}
      />
    </View>
  );
};

export default PlaylistsScreen;
