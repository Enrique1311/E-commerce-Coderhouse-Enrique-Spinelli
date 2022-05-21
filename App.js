import { ActivityIndicator } from "react-native";
import { useFonts } from "expo-font";
import { SafeAreaView } from "react-native-safe-area-context";
import MainNavigator from "./Navigation/Shop";

export default function App() {
  // const [categorySelected, setCategorySelected] = useState(null);

  // const [productSelected, setProductSelected] = useState(null);

  // const handleCategory = (category) => {
  //   setCategorySelected(category);
  // };

  // const handleProduct = (product) => {
  //   setProductSelected(product);
  // };

  const [loaded] = useFonts({
    Koulen: require("./assets/fonts/Koulen/Koulen-Regular.ttf"),
    MuktaBold: require("./assets/fonts/Mukta/Mukta-Bold.ttf"),
  });
  if (!loaded) {
    return <ActivityIndicator />;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MainNavigator />
    </SafeAreaView>
  );
}
