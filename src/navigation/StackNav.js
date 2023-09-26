import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import MyDrawer from "./MyDrawer";

const Stack = createNativeStackNavigator();

function StackNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Drawer" component={MyDrawer} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Todos" component={Home} />
    </Stack.Navigator>
  );
}

export default StackNav;
