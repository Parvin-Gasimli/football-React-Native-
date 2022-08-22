import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
} from "react-native";

import React, { useState } from "react";
import { FontAwesome5, AntDesign, Entypo } from "@expo/vector-icons";
import { Link } from "react-router-native";
import TabMenuBottom from "./TabMenuBottomProfile";

const images = [
  {
    id: 1,
    img: "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt8478df7b66d93d1d/60dae3ed90ef0d39a2fb3c2d/524e55c37d545649088c7a948018826dd09527c7.jpg",
    text: "Tofig Bahramov",
    Location: "Azerbaijan",
    Price: 200,
  },
  {
    id: 2,
    img: "https://cdni0.trtworld.com/w960/h540/q75/38693_AP_18219491338359_1533720615023.jpg",
    text: "Digor Drogba",
    Location: "China",
    Price: 300,
  },
  {
    id: 3,
    img: "https://images.theconversation.com/files/274321/original/file-20190514-60557-1k8j2bm.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop",
    text: "Nahid Aliyev",
    Location: "Germany",
    Price: 400,
  },
  {
    id: 4,
    img: "https://i2-prod.footballscotland.co.uk/incoming/article22517747.ece/ALTERNATES/s1200c/0_Celtic-v-Hibernian-Premier-Sports-Cup-Final.jpg",
    text: "Can Ali",
    Location: "Turkey",
    Price: 500,
  },
  {
    id: 5,
    img: "https://resources.premierleague.com/photos/2022/04/05/4c16b9d6-86f3-4b00-9949-dab8eede1e86/Anthony-Taylor-referee.png?width=930&height=620",
    text: "John Doe",
    Location: "England",
    Price: 500,
  },
  {
    id: 6,
    img: "http://www.thefa.com/-/media/www-thefa-com/images/governance/referees/referee-andre-marriner800.ashx?as=0&dmc=0&thn=0",
    text: "Mark Doe",
    Location: "Japony",
    Price: 500,
  },
];

const WIDTH = Dimensions.get("window").width;
const HEIGTH = Dimensions.get("window").height;

export default function HakimStadion() {
  return (
    <View>
      <View
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
          paddingTop:20,
          paddingLeft:10
        }}
      >
        <View style={{borderRadius:100,borderWidth:1,borderColor:'black',padding:5}} >
          <Link to="/">
            <AntDesign name="arrowleft" size={24} color="black" />
          </Link>
        </View>

        <View>
          <Text
            style={{
              textAlign: "center",
              fontSize: 20,
              fontWeight: "bold",
              marginBottom: 10,
            }}
          >
            Refree
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
                    alignItems: "baseline",
                    marginTop: 0,
                  }}
                >
                  <AntDesign name="user" size={20} color="black" />
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
                    justifyContent: "center",
                    alignItems: "baseline",
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
      <TabMenuBottom />
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
