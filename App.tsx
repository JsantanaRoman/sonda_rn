import { Audio } from "expo-av";
import { Provider } from "react-redux";
import { HomeScreen } from "_screens";
import { store } from "_store";

const App = () => {
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
