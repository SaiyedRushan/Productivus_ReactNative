import React, { useState } from "react";
import { View, Text, StyleSheet, KeyboardAvoidingView } from "react-native";
import { FIREBASE_AUTH } from "../../FirebaseConfig";
import { ActivityIndicator, Button, TextInput } from "react-native-paper";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;

  const signIn = async () => {
    setLoading(true);

    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
      setLoading(false);
      alert("You're logged in");
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      setLoading(false);
      alert("Incorrect email or password");
    }
  };

  const signUp = async () => {
    setLoading(true);

    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      console.log(response);
      setLoading(false);
      alert("Check your emails for a verification link");
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      setLoading(false);
      alert("Registration failed");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, paddingBottom: 10 }}> Login </Text>
      {/* <KeyboardAvoidingView behavior="padding"> */}
      <TextInput value={email} style={styles.input} placeholder="Email" autoCapitalize="none" onChangeText={(text) => setEmail(text)}></TextInput>
      <TextInput value={password} secureTextEntry={true} style={styles.input} placeholder="Password" autoCapitalize="none" onChangeText={(text) => setPassword(text)}></TextInput>

      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <>
          <Button onPress={signIn} mode="outlined" styles={styles.button}>
            Login
          </Button>
          <Button onPress={signUp} mode="outlined">
            Create Account
          </Button>
        </>
      )}
      {/* </KeyboardAvoidingView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: "80%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    margin: 10,
    padding: 5,
  },
  button: {
    margin: 10,
  },
});

export default Login;
