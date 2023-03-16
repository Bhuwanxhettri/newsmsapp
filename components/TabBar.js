import React from "react";
import { Avatar } from "@rneui/themed";
import { View, Text, StyleSheet, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const TabBar = () => {
  return (
    <View style={styles.topBarContainer}>
      <AntDesign name="home" size={24} color="black" />
      <MaterialCommunityIcons name="face-man" size={24} color="black" />
      <AntDesign name="profile" size={24} color="black" />
      <Feather name="book" size={24} color="black" />
      <Ionicons name="ios-settings-outline" size={24} color="black" />
    </View>
  );
};

const styles = StyleSheet.create({
  topBarContainer: {
    width: "100%",
    height: 45,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 23,
    marginTop: 26,
    marginTop: 450,
    backgroundColor: "white",
    padding: 10,
  },
});

export default TabBar;
