import { Audio } from "expo-av";
import * as Fonts from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useState } from "react";
import { Provider } from "react-redux";
import { HomeScreen } from "_screens";
import { store } from "_store";

let customFonts = {
  "AtHauss-Regular": require("./../src/assets/fonts/AtHaussStd-Retina.otf"),
  "AtHauss-Medium": require("./../src/assets/fonts/AtHaussStd-Medium.otf"),
  "AtHauss-Super": require("./../src/assets/fonts/AtHaussStd-Super.otf"),
};

SplashScreen.preventAutoHideAsync();

const App = () => {
  const [initialize, setinitialize] = useState(false);

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
      <HomeScreen />
    </Provider>
  );
};

export default App;
