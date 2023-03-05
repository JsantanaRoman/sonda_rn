import { StatusBar } from "expo-status-bar";
import { Image } from "expo-image";
import { StyleSheet, View, Platform, ScrollView } from "react-native";
import { Colors, Spacing } from "./styles";
import SoundCard from "./components/SoundCard";

const App = () => {
  return (
    <>
      <StatusBar backgroundColor={Colors.BLACK} style="light" />
      <View style={styles.heading}>
        <Image
          style={styles.headerLogo}
          source={require("./assets/images/logo.svg")}
          contentFit="contain"
        ></Image>
        <View style={styles.headingRight}>
          <Image
            style={styles.headerIcons}
            source={require("./assets/images/hamburger.svg")}
            contentFit="contain"
          ></Image>
          <Image
            style={[styles.headerIcons, { marginLeft: Spacing.SCALE_24 }]}
            source={require("./assets/images/settings.svg")}
            contentFit="contain"
          ></Image>
        </View>
      </View>
      <ScrollView style={styles.container}>
        <SoundCard name="Coqui" />
      </ScrollView>
    </>
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
    paddingHorizontal: Spacing.SCALE_16,
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
  },
  container: {
    backgroundColor: Colors.BLACK,
    color: Colors.PRIMARY,
    padding: Spacing.SCALE_16,
  },
});
