import "react-native-gesture-handler"; // this needs to be at top of file to work
import { StyleSheet, Text, View } from "react-native";
import { MD3LightTheme as DefaultTheme, PaperProvider } from "react-native-paper";
import { AppRegistry } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useState, useEffect } from "react";
import Login from "./src/screens/Login";
import StackNav from "./src/navigation/Stacknav";
import { onAuthStateChanged } from "firebase/auth";
import { FIREBASE_AUTH } from "./FirebaseConfig";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "tomato",
    secondary: "yellow",
  },
};

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      console.log(user);
      setUser(user);
    });
  }, []);

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>{user ? <StackNav /> : <Login />}</NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

AppRegistry.registerComponent("Productivus", () => App);
