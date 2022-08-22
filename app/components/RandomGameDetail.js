import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { Link } from "react-router-native";
import {
  Entypo,
  AntDesign,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

export default function RandomGameDetail() {
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
            Details
          </Text>
        </View>
      </View>
      <ScrollView style={{ height: "100%",backgroundColor: "#242761" }}>
        <View
          style={{ backgroundColor: "#242761", width: "100%", height: "100%" }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 20,
              paddingLeft: 20,
              paddingTop: 10,
            }}
          >
            Time
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              paddingLeft: 20,
              paddingTop: 15,

              alignItems: "center",
            }}
          >
            <AntDesign name="clockcircleo" size={24} color="white" />
            <Text style={{ color: "white", fontWeight: "400", marginLeft: 10 }}>
              1 Sep 2022
            </Text>
          </View>
          <Text
            style={{
              color: "white",
              fontSize: 23,
              paddingLeft: 20,
              paddingTop: 15,
              paddingBottom: 10,
              fontWeight: "500",
            }}
          >
            Soccer referee
          </Text>
          <View
            style={{
              padding: 10,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              style={{
                width: 120,
                height: 120,
                borderRadius: 100,
                resizeMode: "cover",
              }}
              source={{ uri: "https://wallpaperaccess.com/full/4349032.jpg" }}
            />

            <View style={{ marginLeft: 20 }}>
              <Text style={{ fontSize: 24, color: "white", fontWeight: "400" }}>
                Raceb Aliyev
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: "white",
                  fontWeight: "300",
                  marginTop: 10,
                }}
              >
                Baku, Azerbaijan
              </Text>

              <Link to="/hakim">
                <Text
                  style={{
                    color: "white",
                    borderRadius: 10,
                    borderWidth: 1,
                    textAlign: "center",
                    marginTop: 10,
                    padding: 10,
                    borderColor: "white",
                  }}
                >
                  Choose Refree
                </Text>
              </Link>
            </View>
          </View>
          <Text
            style={{
              paddingLeft: 20,
              paddingTop: 10,
              marginTop: 0,
              fontSize: 20,
              color: "white",
            }}
          >
            Stadium
          </Text>

          <View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                padding: 10,
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <MaterialCommunityIcons
                  name="stadium"
                  size={26}
                  color="white"
                />
                <Text style={{ color: "white", marginLeft: 10 }}>
                  London Stadium
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Entypo name="location-pin" size={26} color="white" />
                <Text style={{ color: "white", marginLeft: 5 }}>England</Text>
              </View>
             
            </View>
            <Image
              style={{ width: "100%", height: 200 }}
              source={{
                uri: "https://www.footballtalk.org/wp-content/uploads/2020/07/fifa-19-stadium-4k-of-scaled.jpg",
              }}
            />
            <Link to="/stadion">
              <Text
                style={{
                  color: "white",
                  borderRadius: 10,
                  borderWidth: 1,
                  textAlign: "center",
                  padding: 10,
                  borderColor: "white",
                  margin: 10,
                }}
              >
                Choose Stadium
              </Text>
            </Link>
          </View>

          <View>
            <Link to="/">
              <Text
                style={{
                  color: "black",
                  backgroundColor: "white",
                  width: 200,
                  padding: 10,
                  textAlign: "center",
                  borderRadius: 10,
                  margin: 10,
                }}
              >
                Next
              </Text>
            </Link>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
