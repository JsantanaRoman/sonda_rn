import { StatusBar } from "expo-status-bar";
import { Image } from "expo-image";
import { Audio } from "expo-av";
import { StyleSheet, View, Platform, ScrollView } from "react-native";
import { Colors, Spacing } from "./styles";
import SoundCard from "./components/SoundCard";
import { SoundList } from "./utils/constants";
import IconButton from "./components/IconButton";
// test
const App = () => {
  // TODO: Create Global Config File
  // Request audio permission
  Audio.requestPermissionsAsync();
  Audio.setAudioModeAsync({ playsInSilentModeIOS: true });

  // TODO: Create and Move to home screen
  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor={Colors.BLACK} style="light" />
      <View style={styles.heading}>
        <Image
          style={styles.headerLogo}
          source={require("./assets/images/logo.svg")}
          contentFit="contain"
        ></Image>
        <View style={styles.headingRight}>
          <IconButton
            iconPath={require("./assets/images/hamburger.svg")}
            iconStyle={styles.headerIcons}
            contentFit={"contain"}
          />
          <IconButton
            iconPath={require("./assets/images/settings.svg")}
            iconStyle={[styles.headerIcons, { marginLeft: Spacing.SCALE_24 }]}
            contentFit={"contain"}
          />
        </View>
      </View>
      <ScrollView style={styles.container}>
        {SoundList.map((prop, key) => {
          return (
            <SoundCard
              name={prop.name}
              key={key}
              soundPath={prop.soundPath}
              available={prop.available}
            />
          );
        })}
      </ScrollView>
      <IconButton
        iconPath={require("./assets/images/play.svg")}
        containerStyle={styles.playButtonContainer}
        iconStyle={styles.playButton}
        contentFit={"contain"}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  heading: {
    backgroundColor: Colors.BLACK,
    height: Platform.OS === "ios" ? 114 : 100,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    padding: Spacing.SCALE_16,
  },
  headingRight: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: 41,
  },
  headerIcons: {
    height: 22,
    width: 22,
  },
  headerLogo: {
    height: 41,
    width: 27,
    paddingBottom: Spacing.SCALE_16,
  },
  container: {
    backgroundColor: Colors.BLACK,
    color: Colors.PRIMARY,
    padding: Spacing.SCALE_16,
  },
  playButtonContainer: {
    borderRadius: 50,
    height: 57,
    width: 57,
    backgroundColor: "#61616166",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 42,
    right: 16,
    zIndex: 2,
  },
  playButton: {
    height: 17,
    width: 17,
  },
});
