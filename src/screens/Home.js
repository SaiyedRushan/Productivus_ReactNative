import React from "react";
import { View, Text } from "react-native";
import { Title, Paragraph, Button } from "react-native-paper";
import { FIREBASE_AUTH } from "../../FirebaseConfig";

const Home = ({ navigation }) => {
  return (
    <View style={{ alignItems: "center", padding: 10 }}>
      <Title> Hello Champ </Title>
      <Paragraph>Let's get choppin'</Paragraph>
      <Button onPress={() => FIREBASE_AUTH.signOut()}> Logout</Button>
    </View>
  );
};

export default Home;
