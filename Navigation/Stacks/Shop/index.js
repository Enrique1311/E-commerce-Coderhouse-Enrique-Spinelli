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
        headerTitleStyle: {
          fontFamily: "Koulen",
          fontSize: 25,
        },
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "Categorías",
        }}
      />
      <Stack.Screen
        name="Products"
        component={ProductsScreen}
        options={({ route }) => ({
          title: route.params.categoryTitle,
        })}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={({ route }) => ({
          title: route.params.productTitle,
        })}
      />
    </Stack.Navigator>
  );
}

export default ShopNavigator;
