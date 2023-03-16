import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from "react-native";

import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const banner = require("../../assets/Banner.png");
const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isloading, setIsloading] = useState(false);

  //method to validate the user credentials and navigate to Home Screen / Dashboard
  const loginHandle = () => {
    setIsloading(true);
    // [check validation] -- Start
    // if email does not contain @ sign
    if (email == "") {
      setIsloading(false);
      return setError("Please enter your email");
    }
    if (password == "") {
      setIsloading(false);
      return setError("Please enter your password");
    }
    if (!email.includes("@")) {
      setIsloading(false);
      return setError("Email is not valid");
    }
    // length of email must be greater than 5 characters
    if (email.length < 6) {
      setIsloading(false);
      return setError("Email is too short");
    }
    // length of password must be greater than 5 characters
    if (password.length < 6) {
      setIsloading(false);
      return setError("Password must be 6 characters long");
    }
    // [check validation] -- End

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    axios
      .post("https://sms-twox.onrender.com/api/auth/student/login", {
        email: email,
        password: password,
        // deviceId: expoPushToken,
      })
      .then((res) => {
        if (res.data.status === 200) {
          AsyncStorage.setItem("access_token", res.data.access_token);
          navigation.navigate("dashboard");
          setIsloading(false);
        }
        setError(res.response?.data?.message);
        setIsloading(false);
      })
      .catch((err) => {
        setError(err.response?.data?.message);
        setIsloading(false);
      });
  };

  useEffect(() => {}, [error]);
  return (
    <View style={styles.container}>
      <ImageBackground source={banner} style={styles.header}></ImageBackground>
      <View style={styles.card}>
        {error != null && (
          <>
            <Text style={{ color: "red" }}>{error}</Text>
          </>
        )}
        <TextInput
          onChange={(event) => {
            setEmail(event.nativeEvent.text);
          }}
          style={styles.input}
          placeholder="Email"
        />
        <TextInput
          style={styles.input}
          onChange={(event) => {
            setPassword(event.nativeEvent.text);
          }}
          placeholder="Password"
          secureTextEntry={true}
        />

        <TouchableOpacity style={styles.forgotPasswordButton}>
          <Text
            onPress={() => navigation.navigate("forgetpassword")}
            style={styles.forgotPasswordButtonText}
          >
            Forgot?
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={loginHandle} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>

      <Text
        onPress={() => navigation.navigate("dashboard")}
        style={styles.forgotPasswordButtonText}
      >
        Dashbaord
      </Text>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
    paddingBottom: 20,
    width: "100%",
    height: 200,
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  forgotPasswordButton: {
    width: "100%",
    textAlign: "flex-end",
  },
  forgotPasswordButtonText: {
    color: "#20B2AA",
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "right",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    padding: 20,
    marginTop: 40,
    width: "90%",
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    width: "100%",
  },
  button: {
    backgroundColor: "#35C7EA",
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  createAccountButton: {
    marginTop: 20,
  },
  createAccountButtonText: {
    color: "#20B2AA",
    fontSize: 12,
    fontWeight: "bold",
  },
});
