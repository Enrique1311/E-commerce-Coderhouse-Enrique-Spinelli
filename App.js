import { ActivityIndicator } from "react-native";
import { useFonts } from "expo-font";
//import { SafeAreaView } from "react-native-safe-area-context";
import MainNavigator from "./Navigation";
import { Provider } from "react-redux";
import store from "./Store";

export default function App() {
  const [loaded] = useFonts({
    Koulen: require("./assets/fonts/Koulen/Koulen-Regular.ttf"),
    MuktaBold: require("./assets/fonts/Mukta/Mukta-Bold.ttf"),
  });
  if (!loaded) {
    return <ActivityIndicator />;
  }

  return (
    //  <SafeAreaView style={{ flex: 1 }}>
    <Provider store={store}>
      <MainNavigator />
    </Provider>
    //  </SafeAreaView>
  );
}
