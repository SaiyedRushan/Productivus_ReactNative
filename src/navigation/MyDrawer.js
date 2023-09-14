import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../screens/Home";

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Todos" component={Home} />
      <Drawer.Screen name="Journal" component={Home} />
      <Drawer.Screen name="Calendar" component={Home} />
    </Drawer.Navigator>
  );
}
