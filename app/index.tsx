import { Provider } from "react-redux";
import { HomeScreen } from "_screens";
import { store } from "_store";

const Home = () => {
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
};

export default Home;
