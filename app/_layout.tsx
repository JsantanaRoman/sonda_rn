import { Audio } from "expo-av";
import * as Fonts from "expo-font";
import * as Haptics from "expo-haptics";
import { Stack, useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useState } from "react";
import { Platform, StyleSheet, View } from "react-native";
import { Colors, Spacing } from "_styles";
import { IconButton } from "_components";
import { Provider } from "react-redux";
import { store } from "_store";

let customFonts = {
  "AtHauss-Regular": require("./../src/assets/fonts/AtHaussStd-Retina.otf"),
  "AtHauss-Medium": require("./../src/assets/fonts/AtHaussStd-Medium.otf"),
  "AtHauss-Super": require("./../src/assets/fonts/AtHaussStd-Super.otf"),
};

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const [initialize, setinitialize] = useState(false);
  const router = useRouter();

  const initializeApp = async () => {
    try {
      await Fonts.loadAsync(customFonts);
      Audio.requestPermissionsAsync();
      Audio.setAudioModeAsync({ playsInSilentModeIOS: true });
      setinitialize(true);
      if (initialize) {
        SplashScreen.hideAsync();
      }

      if (!initialize) {
        return null;
      }
    } catch (error) {
      console.log("Initialization Error:", error);
    }
  };

  initializeApp();

  return (
    <Provider store={store}>
      <Stack
        screenOptions={{
          headerTransparent: true,
          headerBlurEffect: "dark",
          headerStyle:
            Platform.OS !== "ios"
              ? {
                  backgroundColor: Colors.BLACK,
                }
              : {},
          headerTitle: "",
          headerLeft: () => (
            <IconButton
              iconPath={require("../src/assets/images/logo.svg")}
              iconStyle={styles.headerLogo}
              contentFit={"contain"}
              onPress={() => {
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
              }}
            />
          ),
          headerRight: () => (
            <View style={styles.headingRight}>
              <IconButton
                iconPath={require("../src/assets/images/hamburger.svg")}
                iconStyle={styles.headerIcons}
                contentFit={"contain"}
                onPress={() => {
                  router.push("/playlists");
                  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                }}
              />
              <IconButton
                iconPath={require("../src/assets/images/settings.svg")}
                iconStyle={[
                  styles.headerIcons,
                  { marginLeft: Spacing.SCALE_24 },
                ]}
                contentFit={"contain"}
                onPress={() => {
                  router.push("/settings");
                  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                }}
              />
            </View>
          ),
        }}
      >
        <Stack.Screen
          name="playlists"
          options={{
            presentation: "modal",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="settings"
          options={{
            presentation: "modal",
            headerShown: false,
          }}
        />
      </Stack>
    </Provider>
  );
}

const styles = StyleSheet.create({
  headingRight: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: 41,
  },
  headerIcons: {
    height: 16,
    width: 16,
  },
  headerLogo: {
    height: 24,
    width: 27,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});
