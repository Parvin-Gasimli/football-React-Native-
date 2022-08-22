import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Link } from "react-router-native";
import { AntDesign } from "@expo/vector-icons";
import TabMenuBottom from "./TabMenuBottom";

export default function Odenis() {
  return (
    <View style={{height:'100%'}}>
      <View
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
          width: "96%",
          marginTop: 40,
          padding: 10
        }}
      >
        <Link to="/creategame">
          <View
            style={{
              marginLeft: 20,
              width: 30,
              height: 30,
              borderRadius: 40,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderWidth: 1,
            }}
          >
            <AntDesign name="arrowleft" size={15} color="black" />
          </View>
        </Link>
        <View>
          <Text
            style={{ textAlign: "center", fontSize: 20, fontWeight: "bold" }}
          >
            Payment
          </Text>
        </View>
      </View>
      <ScrollView style={{marginBottom:10}}>
        <View>
          <Link to="/random">
            <Image
              style={{
                marginTop: 40,
                width: "100%",
                height: 200,
                borderRadius: 10,
                resizeMode: "cover",
              }}
              source={require("../assets/footbalcard500.png")}
            />
          </Link>
        </View>
        <View>
          <Link to="/random">
            <Image
              style={{
                width: "100%",
                height: 200,
                borderRadius: 10,
                resizeMode: "cover",
                marginTop: 20,
              }}
              source={require("../assets/footbalcard800.png")}
            />
          </Link>
        </View>
        <View>
          <Link to="/random">
            <Image
              style={{
                width: "100%",
                height: 200,
                borderRadius: 10,
                resizeMode: "cover",
                marginTop: 20,
              }}
              source={require("../assets/Footbal599card.png")}
            />
          </Link>
        </View>
      </ScrollView>
 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  images: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginTop: 20,
  },
  submitButton: {
    backgroundColor: "#16283e",
    padding: 10,
    margin: 25,
    height: 50,
    textAlign: "center",
    borderRadius: 8,
    width: "100%",
  },
  submitButtonText: {
    color: "white",
    textAlign: "center",
  },
});
