import { Stack, useRouter } from "expo-router";
import { Platform, StyleSheet, View } from "react-native";
import { Colors, Spacing } from "_styles";
import * as Haptics from "expo-haptics";
import { IconButton } from "../src/components";
// TODO Move app initialization to this File, then call routes, then call initial route as app.jsx
export default function Layout() {
  const router = useRouter();

  return (
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
              iconStyle={[styles.headerIcons, { marginLeft: Spacing.SCALE_24 }]}
              contentFit={"contain"}
              onPress={() => {
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
    </Stack>
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
