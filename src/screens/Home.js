import React from "react";
import { View, Text } from "react-native";
import { Title, Paragraph, Button } from "react-native-paper";
import { FIREBASE_AUTH } from "../../FirebaseConfig";

const Home = ({ navigation }) => {
  return (
    <View style={{ alignItems: "center", padding: 10 }}>
      <Title> Hello Champ </Title>
      <Paragraph>Let's get choppin'</Paragraph>
    </View>
  );
};

export default Home;
