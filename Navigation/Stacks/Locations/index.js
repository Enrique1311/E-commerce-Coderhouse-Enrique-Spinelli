import React from "react";
import { colors } from "../../../Styles/colors";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyButton from "../../../Components/MyButton";
import { MaterialIcons } from "@expo/vector-icons";
import LocationsScreen from "../../../Screens/LocationsScreen";
import AddLocationScreen from "../../../Screens/AddLocationScreen";
import GetLocationScreen from "../../../Screens/GetLocationScreen";
import SetLocationScreen from "../../../Screens/SetLocationScreen";

const Stack = createNativeStackNavigator();

const LocationsStack = () => {
  return (
    <Stack.Navigator
      initialRouteName=""
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: colors.light,
        headerTitleStyle: {
          fontFamily: "Koulen",
          fontSize: 25,
        },
        headerTitleAlign: "left",
      }}
    >
      <Stack.Screen
        name="Locations"
        component={LocationsScreen}
        options={({ navigation }) => ({
          title: "Direcciones",
          headerRight: () => {
            return (
              <MyButton onPress={() => navigation.navigate("AddLocation")}>
                <MaterialIcons
                  name="add-location"
                  size={25}
                  color={colors.light}
                />
              </MyButton>
            );
          },
        })}
      />
      <Stack.Screen
        name="AddLocation"
        component={AddLocationScreen}
        options={{
          title: "Agregar dirección",
        }}
      />
      <Stack.Screen
        name="GetLocation"
        component={GetLocationScreen}
        options={{
          title: "Obtener ubicación",
        }}
      />
      <Stack.Screen
        name="SetLocation"
        component={SetLocationScreen}
        options={{
          title: "Ubicación manual",
        }}
      />
    </Stack.Navigator>
  );
};

export default LocationsStack;
