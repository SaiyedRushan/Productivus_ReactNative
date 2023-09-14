import React from "react";
import { View, Text } from "react-native";
import { Title, Paragraph } from "react-native-paper";

const Home = () => {
  return (
    <View style={{ alignItems: "center", padding: 10 }}>
      <Title> Hello Champ </Title>
      <Paragraph>Let's get choppin'</Paragraph>
    </View>
  );
};

export default Home;
