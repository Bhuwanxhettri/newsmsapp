import React from "react";
import { View, Dimensions, Text, StyleSheet } from "react-native";
import Nav from "../../components/NavBar/NavBar";
import TabBar from "../../components/TabBar";
import Subject from "./Subject";

const DashboardScreen = () => {
  return (
    <View>
      <Nav />
      <Subject />
      <TabBar />
    </View>
  );
};

export default DashboardScreen;
