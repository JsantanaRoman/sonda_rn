import { StatusBar } from "expo-status-bar";
import { FlatList, SafeAreaView, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { IconButton, SoundCard } from "_components";
import { RootState } from "_store";
import { Colors, Spacing } from "_styles";
import { Constants } from "_utils";
import { setPlayAll } from "../../store/playAll";
import styles from "./style";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const { playAll } = useSelector((state: RootState) => state.playAll);

  const handlePress = () => {
    dispatch(setPlayAll(!playAll));
  };

  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor={Colors.BLACK} style="light" />
      <SafeAreaView style={{ backgroundColor: Colors.BLACK }}>
        <FlatList
          style={styles.container}
          data={Constants.SoundList}
          renderItem={({ item, index }) => (
            <SoundCard
              name={item.name}
              key={index}
              soundPath={item.soundPath}
              available={item.available}
            />
          )}
        />
      </SafeAreaView>
      <IconButton
        iconPath={
          !playAll
            ? require("../../assets/images/play.svg")
            : require("../../assets/images/pause.svg")
        }
        containerStyle={styles.playButtonContainer}
        iconStyle={styles.playButton}
        contentFit={"contain"}
        onPress={handlePress}
      />
    </View>
  );
};

export default HomeScreen;
