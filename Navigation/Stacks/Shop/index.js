import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "../../../Screens/CategoriesScreen";
import DetailsScreen from "../../../Screens/DetailsScreen";
import ProductsScreen from "../../../Screens/ProductsScreen";
import { colors } from "../../../Styles/colors";

const Stack = createNativeStackNavigator();

function ShopNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: colors.light,
        headerShown: "",
        headerTitleStyle: {
          fontFamily: "Koulen",
          fontSize: 26,
        },
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          headerShown: false,
          title: "Categorías",
        }}
      />
      <Stack.Screen
        name="Products"
        component={ProductsScreen}
        options={({ route }) => ({
          title: route.params.categoryTitle,
          headerShown: false,
        })}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={({ route }) => ({
          title: route.params.productTitle,
          headerShown: false,
        })}
      />
    </Stack.Navigator>
  );
}

export default ShopNavigator;
