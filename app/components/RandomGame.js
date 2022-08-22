import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Link } from "react-router-native";
import {
  
  AntDesign,
 
} from "@expo/vector-icons";
import TabMenuBottom from "./TabMenuBottom";

export default function RandomGame() {
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
            Random Game
          </Text>
        </View>
      </View>

      <View
        style={{ backgroundColor: "#242761", width: "100%", height: "100%" }}
      >
        <Text
          style={{
            textAlign: "center",
            marginTop: 40,
            fontSize: 32,
            color: "white",
          }}
        >
          Random Match
        </Text>
        <View
          style={{
            height: "44%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <View>
            <Image
              style={{
                width: 140,
                height: 140,
                borderRadius: 100,
                resizeMode: "cover",
              }}
              source={{
                uri: "https://static.wikia.nocookie.net/althistory/images/1/1a/UKfootball%28UKatWC%29.png/revision/latest?cb=20160229103436",
              }}
            />
            <Text
              style={{
                textAlign: "center",
                color: "white",
                marginTop: 20,
                fontSize: 16,
                fontWeight: "300",
              }}
            >
              London Stadium
            </Text>
            <Text
              style={{
                textAlign: "center",
                color: "white",
                marginTop: 5,
                fontSize: 14,
                fontWeight: "300",
              }}
            >
            United Kingdom
            </Text>
            {/* <Text
              style={{
                textAlign: "center",
                color: "white",
                marginTop: 5,
                fontSize: 16,
                fontWeight: "300",
              }}
            >
              2470 $
            </Text> */}
          </View>

          <View>
            <Image
              style={{
                width: 140,
                height: 140,
                borderRadius: 100,
                resizeMode: "cover",
              }}
              source={{
                uri: "https://britfoos.com/wp-content/uploads/sites/26/2016/06/Logo-BFA-2016-BFA-300x286.png",
              }}
            />
            <Text
              style={{
                textAlign: "center",
                color: "white",
                marginTop: 10,
                fontSize: 16,
                fontWeight: "300",
              }}
            >
              London Stadium
            </Text>
            <Text
              style={{
                textAlign: "center",
                color: "white",
                marginTop: 5,
                fontSize: 14,
                fontWeight: "300",
              }}
            >
        Utided Kingdom
            </Text>
            {/* <Text
              style={{
                textAlign: "center",
                color: "white",
                marginTop: 5,
                fontSize: 16,
                fontWeight: "300",
              }}
            >
              2470 $
            </Text> */}
          </View>
        </View>
        <View
          style={{ backgroundColor: "white", padding: 10, borderRadius: 10 }}
        >
            <TouchableOpacity>
             <Link to="/randomgamedetail">
              <Text style={{ textAlign: "center" }}>Next</Text>
             </Link>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
