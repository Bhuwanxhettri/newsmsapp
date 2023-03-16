import React from "react";
import { Avatar } from "@rneui/themed";
import { View, Text, StyleSheet } from "react-native";
const NavBar = () => {
  return (
    <View style={styles.topBarContainer}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 10,
        }}
      >
        <Avatar
          size={36}
          rounded
          source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
        />

        <View>
          <Text
            style={{
              fontWeight: "bold",
            }}
          >
            Bhuwan
          </Text>
          <Text
            style={{
              color: "gray",
              fontSize: 8,
            }}
          >
            02-20-2019
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topBarContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 23,
    marginTop: 26,
    backgroundColor: "white",
    padding: 10,
  },
});

export default NavBar;
