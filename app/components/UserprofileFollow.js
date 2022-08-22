import { StyleSheet, View, Text } from "react-native";
import React from "react";

export default function UserprofileFollow() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.count}>0</Text>
        <Text style={styles.name}>Post</Text>
      </View>
      <View>
        <Text style={styles.count}>700</Text>
        <Text style={styles.name}>Follower</Text>
      </View>
      <View>
        <Text style={styles.count}>1500</Text>
        <Text style={styles.name}>Following</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    margin: 20,
  },
  count: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  name: {
    textAlign: "center",
    fontSize: 17,
    margin: 5,
  },
});
