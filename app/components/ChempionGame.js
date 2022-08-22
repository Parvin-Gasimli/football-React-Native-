import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { Link } from "react-router-native";

import {
  AntDesign,
 
} from "@expo/vector-icons";


const chempions = [
  {
    id: 1,
    Images:
      "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png",
    Price: 2700,
    Location: "Cambridgeshire ",
  },
  {
    id: 2,
    Images:
      "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png",

    Price: 2200,
    Location: "Cumbria",
  },
  {
    id: 3,
    Images:
      "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png",
    StadiumName: "Range Low Stadium",
    Location: "Darlington",
    Price: 3470,
  },
  {
    id:4,
    Images:
      "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png",
    StadiumName: "Big Parse Stadium",
    Location: "Lincolnshire",
    Price: 2550,
  },
  {
    id: 5,
    Images:
      "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png",
    StadiumName: "London Stadium",
    Location: "Nottinghamshire",
    Price: 3400,
  },
  {
    id: 6,
    Images:
      "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png",
    StadiumName: "Manchestr Stadium",
    Location: "Oxfordshire",
    Price: 4430,
  },
  {
    id: 7,
    Images:
      "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png",

    Location: "Cumbria",
    Price: 5800,
  },
  {
    id: 8,
    Images:
      "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png",

    Location: "Darlington",
    Price: 5600,
  },
  {
    id: 9,
    Images:
      "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png",

    Location: "Gloucester",
    Price: 6400,
  },
  {
    id: 10,
    Images:
      "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png",

    Location: "Gloucester",
    Price: 4500,
  },
  {
    id:11,
    Images:
      "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png",

    Location: "Lincolnshire ",
    Price: 5500,
  },
  {
    id: 12,
    Images:
      "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png",

    Location: "Nottinghamshire ",
    Price: 5550,
  },
  {
    id: 13,
    Images:
      "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png",

    Location: "Oxfordshire ",
    Price: 7300,
  },
];

export default function ChempionGame() {
  return (
    <View>
      <View
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          width: "96%",
          paddingTop: 30,
          paddingBottom: 10,
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
            ChampionShip
          </Text>
        </View>
      </View>
      <View
        style={{
          width: "99%",
          borderWidth: 2,
          borderRadius: 5,
          padding: 10,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderColor: "black",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            marginTop: 0,
          }}
        >
          <Image
            style={{ width: 35, height: 20, resizeMode: "cover" }}
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png",
            }}
          />
          <Text style={{ fontWeight: "500", marginLeft: 20 }}>
            United Kingdom
          </Text>
        </View>
        <View>
          <AntDesign name="downcircleo" size={24} color="black" />
        </View>
      </View>
      <ScrollView>
        {chempions &&
          chempions.map((item, id) => (
           <Link  key={id} to="/chempiondetail">
            <View
              key={id}
              style={{
                borderColor: "gray",
                borderRadius: 4,
                borderWidth: 1,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                width: "96%",
                padding: 10,
                marginLeft: 7,
                marginTop: 10,
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Image
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 5,
                    resizeMode: "cover",
                    marginBottom:10
                  }}
                  source={{
                    uri: item.Images,
                  }}
                />
                <Text style={{ marginLeft: 20 }}>{item.Location} </Text>
              </View>

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text style={{ marginLeft: 10, fontWeight: "500" }}>
                  ${item.Price}{" "}
                </Text>
              </View>
            </View>
           </Link>
          ))}
      </ScrollView>
     
    </View>
  );
}
