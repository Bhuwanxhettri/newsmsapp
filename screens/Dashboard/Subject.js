import React from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
var { width } = Dimensions.get("window");
const data = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
      color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`, // optional
      strokeWidth: 2, // optional
    },
  ],
};
const Subject = () => {
  return (
    <View style={{ flex: 1, width: "100%" }}>
      <ScrollView>
        <Text>C programming</Text>
        <Text>C programming</Text>
        <Text>C programming</Text>
        <Text>C programming</Text>
        <LineChart
          data={data}
          width={360}
          height={220}
          yAxisLabel="$"
          yAxisSuffix="k"
          chartConfig={{
            backgroundColor: "#51C5F2",
            backgroundGradientFrom: "#51C5F2",
            backgroundGradientTo: "#51C5F2",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#51C5F2",
            },
          }}
          bezier
          style={{
            marginVertical: 6,
            elevation: 8,
            marginLeft: 15,
          }}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  actionContainer: { padding: 20, width: "100%", flex: 1, height: "90%" },
});

export default Subject;
