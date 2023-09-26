import {
	createDrawerNavigator,
	DrawerContentScrollView,
	DrawerItemList,
	DrawerItem,
} from '@react-navigation/drawer';
import Home from '../screens/Home';
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import JournalList from '../screens/JournalList';

const Drawer = createDrawerNavigator();

// this function basically just adds a logout button to the drawer
function CustomDrawerContent(props) {
	return (
		<DrawerContentScrollView {...props}>
			<DrawerItemList {...props} />
			<DrawerItem
				label="Logout"
				style={{ backgroundColor: '	#ff6b6b' }}
				onPress={() => FIREBASE_AUTH.signOut()}
			/>
		</DrawerContentScrollView>
	);
}

export default function MyDrawer() {
	return (
		<Drawer.Navigator
			drawerContent={(props) => <CustomDrawerContent {...props} />}
		>
			<Drawer.Screen name="Home" component={Home} />
			<Drawer.Screen name="Journal" component={JournalList} />
			<Drawer.Screen name="Todos" component={Home} />
			<Drawer.Screen name="Calendar" component={Home} />
		</Drawer.Navigator>
	);
}
