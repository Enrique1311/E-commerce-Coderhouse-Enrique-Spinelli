import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigatorLogged from "./Tabs/UserLogged";
import AuthStack from "./Stacks/Auth";

const MainNavigator = () => {
  const [user, setUser] = useState(false);
  return (
    <NavigationContainer>
      {user ? <TabNavigatorLogged /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default MainNavigator;
