import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyDrawer from "./MyDrawer";
import Home from "../screens/Home";
import Login from "../screens/Login";
const Stack = createNativeStackNavigator();

function MainNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Drawer" component={MyDrawer} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}

export default MainNav;
