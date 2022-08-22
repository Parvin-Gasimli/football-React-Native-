import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
} from "react-native";

import React, { useState } from "react";
import { FontAwesome5, AntDesign, Entypo,MaterialCommunityIcons  } from "@expo/vector-icons";
import { Link } from "react-router-native";
import TabMenuBottom from "./TabMenuBottomProfile";

const images = [
  {
    id: 1,
    img: "https://i.pinimg.com/originals/3c/c8/88/3cc88870daa5d31ed101b4dd845680bc.jpg",
    text: "London Stadium",
    Location: "London",
    Price: 2470,
  },
  {
    id: 2,
    img: "https://www.arsenal.com/sites/default/files/styles/large_16x9/public/images/stadium7.jpg?itok=-gobVK2p",
    text: "Germany Stadium",
    Location: "Azerbaijan",
    Price: 3570,
  },
  {
    id: 3,
    img: "https://wallpaper.dog/large/5550466.jpg",
    text: "Madrid Stadium",
    Location: "Barcelona",
    Price: 4040,
  },
  {
    id: 4,
    img: "https://wallpaperaccess.com/full/2244833.jpg",
    text: "Ataturk Stadium",
    Location: "Turkey",
    Price: 5560,
  },
  {
    id: 5,
    img: "https://cdn.wallpapersafari.com/83/57/qxeQgb.jpg",
    text: "London ",
    Location: "England",
    Price: 5400,
  },
  {
    id: 6,
    img: "https://cdn.wallpapersafari.com/83/57/qxeQgb.jpg",
    text: "London ",
    Location: "England",
    Price: 5400,
  },
  
];

const WIDTH = Dimensions.get("window").width;
const HEIGTH = Dimensions.get("window").height;

export default function Stadion() {
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
            Stadium
          </Text>
        </View>
      </View>
      <ScrollView>
        <View>
          {images.map((img, index) => (
            <View
              style={{
                padding: 5,
                margin: 7,
                borderRadius: 20,
                borderWidth: 1,
                marginLeft: 3,
                marginRight: 3,
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
                width: "96%",
                borderRadius: 10,
                elevation: 5,
                borderColor: "white",
                backgroundColor: "white",
                padding: 10,
              }}
              key={img.id}
            >
              <Image
                resizeMode="cover"
                style={styles.wrap}
                source={{ uri: img.img }}
              />
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "baseline",
                  padding: 5,
                }}
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    marginTop: 0,
                  }}
                >
                 <MaterialCommunityIcons name="stadium" size={20} color="black" />
                  <Text style={{ fontSize: 16 }}>{img.text}</Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    marginTop: 10,
                  }}
                >
                  <Entypo name="location-pin" size={20} color="black" />
                  <Text style={{ fontSize: 16 }}>{img.Location}</Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    marginTop: 10,
                  }}
                >
                 
                </View>
                <View
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "flex-end",
                    flexDirection: "column",
                  }}
                >
                  <Text
                    style={{
                      backgroundColor: "darkblue",
                      padding: 10,
                      color: "white",
                      borderRadius: 20,
                      margin: 10,
                      width: 100,
                      textAlign: "center",
                      fontSize: 13,
                    }}
                  >
                    SELECT
                  </Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
     
    </View>
  );
}
const styles = StyleSheet.create({
  wrap: {
    margin: 5,
    width: WIDTH * 0.4,
    height: HEIGTH * 0.2,
    borderRadius: 10,
  },

  dotActive: {
    margin: 3,
    color: "black",
  },
  dot: {
    margin: 3,
    color: "white",
  },
});
