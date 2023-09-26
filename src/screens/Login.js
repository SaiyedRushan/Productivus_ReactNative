import React, { useState } from "react";
import { View, Text, StyleSheet, KeyboardAvoidingView } from "react-native";
import { FIREBASE_AUTH } from "../../FirebaseConfig";
import { ActivityIndicator, Button, TextInput, IconButton } from "react-native-paper";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;
  const [isPasswordVisible, setPasswordVisibility] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisibility(!isPasswordVisible);
  };
  const signIn = async () => {
    setLoading(true);

    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
      setLoading(false);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      setLoading(false);
      alert("Error Logging in: " + errorMessage);
    }
  };

  const signUp = async () => {
    setLoading(true);

    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      console.log(response);
      setLoading(false);
      alert("Successfully registered");
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
      <View style={styles.inputContainer}>
        <TextInput value={email} style={styles.input} placeholder="Email" autoCapitalize="none" onChangeText={(text) => setEmail(text)}></TextInput>
      </View>
      <View style={styles.inputContainer}>
        <TextInput value={password} secureTextEntry={!isPasswordVisible} style={styles.input} placeholder="Password" autoCapitalize="none" onChangeText={(text) => setPassword(text)}></TextInput>
        <IconButton icon={isPasswordVisible ? "eye-off" : "eye"} onPress={togglePasswordVisibility} />
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <View>
          <Button onPress={signIn} mode="outlined">
            Login
          </Button>
          <Text> {"  "}</Text>
          <Button onPress={signUp} mode="outlined">
            Create Account
          </Button>
        </View>
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
  inputContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "start",
    marginLeft: 30,
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default Login;
