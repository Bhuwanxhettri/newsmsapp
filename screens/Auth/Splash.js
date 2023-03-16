import { StyleSheet, View } from "react-native";
import React, { useEffect } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

const Splash = ({ navigation }) => {
  //method to fetch the authUser data from aync storage if there is any and login the Dashboard or Home Screen according to the user type
  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem("access_token");
      if (value !== null) {
        setTimeout(() => {
          navigation.replace("dashboard"); // navigate to Admin dashboard
        }, 2000);
      } else {
        setTimeout(() => {
          navigation.replace("login"); // // navigate to login screen if there is no authUser store in aysnc storage
        }, 2000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // check the authUser and navigate to screens accordingly on initial render
  useEffect(() => {
    _retrieveData();
  }, []);

  return (
    <View style={styles.container}>
      {/* <Image style={styles.logo} source="" /> */}
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  splashText: {
    color: "white",
    fontSize: 50,
    fontWeight: "bold",
  },
  logo: {
    resizeMode: "contain",
    width: 180,
    height: 180,
  },
});
