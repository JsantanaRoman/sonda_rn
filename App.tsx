import { Audio } from "expo-av";
import { Provider } from "react-redux";
import { store } from "./src/store/";
import HomeScreen from "./src/screens/home";

const App = () => {
  // Testing Preview
  // TODO: Create Global Config File
  // Request audio permission
  Audio.requestPermissionsAsync();
  Audio.setAudioModeAsync({ playsInSilentModeIOS: true });

  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
};

export default App;
