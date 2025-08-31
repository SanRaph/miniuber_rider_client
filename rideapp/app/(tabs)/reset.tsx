import { StyleSheet, Text, View, Alert, TextInput, TouchableOpacity, Touchable } from "react-native";
import React, { useEffect, useState, } from "react";
import { useRouter } from "expo-router";



export default function reset() {

  const router = useRouter();


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSignIn = () => {
    if(!email || !password) {
      Alert.alert("Error", "Please fill all fields");
      return;
    }
    // Normally call API here
    Alert.alert("Signed In", `Email: ${email}, Password: ${password}`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reset password!</Text>

      <Text style={styles.subtitle}>Change your password</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#aaa"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="New Password"
        placeholderTextColor="#aaa"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Reset Password</Text>
      </TouchableOpacity>

    </View>
  );
}


const styles = StyleSheet.create({
  subtitle: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    margin: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "#121212",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,
    color: "#fff",
    marginBottom: 40,
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    backgroundColor: "#f9f4f4ff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    color: "#fff",
    borderWidth: 1,
    borderColor: "#333",
  },
  button: {
    backgroundColor: "#ee1000ff",
    padding: 15,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },

 forgotpassword:  {
  margin: 20,
  fontSize: 25,
 },
});