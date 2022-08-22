import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { Link } from "react-router-native";
import { AntDesign } from "@expo/vector-icons";
export default function InviteGame() {
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
            Invatitation Game
          </Text>
        </View>
      </View>
      <ScrollView style={{ height: '100%',backgroundColor: "#242761" }}>
        <View
          style={{ backgroundColor: "#242761", width: "100%", height: "100%" }}
        >
          <Text
            style={{
              textAlign: "center",
              marginTop: 50,
              fontSize: 34,
              color: "white",
            }}
          >
            Friend List Match
          </Text>
       <Link to="/random">
       <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              borderColor: "white",
              width: "96%",
              marginLeft: 5,
              marginBottom: 20,
              borderRadius: 10,
              marginTop: 20,
              borderWidth: 1,
            }}
          >
            <Image
              style={{ width: 150, height: 150 }}
              source={{
                uri: "https://brandlogos.net/wp-content/uploads/2013/09/fk-khazar-lankaran-vector-logo.png",
              }}
            />
            <View>
              <Text style={{ color: "white", fontSize: 18, fontWeight: "300" }}>
                Lankaran FC
              </Text>
              <Text
                style={{
                  color: "white",
                  marginTop: 10,
                  fontWeight: "300",
                  fontSize: 15,
                }}
              >
                Team Streange 2022
              </Text>
            </View>
          </View>
       </Link>
       <Link to="/random">
       <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              borderColor: "white",
              width: "96%",
              marginLeft: 5,
              marginBottom: 20,
              borderRadius: 10,
              marginTop: 20,
              borderWidth: 1,
            }}
          >
            <Image
              style={{ width: 150, height: 150 }}
              source={{
                uri: "https://brandlogos.net/wp-content/uploads/2013/09/fk-khazar-lankaran-vector-logo.png",
              }}
            />
            <View>
              <Text style={{ color: "white", fontSize: 18, fontWeight: "300" }}>
                Lankaran FC
              </Text>
              <Text
                style={{
                  color: "white",
                  marginTop: 10,
                  fontWeight: "300",
                  fontSize: 15,
                }}
              >
                Team Streange 2022
              </Text>
            </View>
          </View>
       </Link>
       <Link to="/random">
       <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              borderColor: "white",
              width: "96%",
              marginLeft: 5,
              marginBottom: 20,
              borderRadius: 10,
              marginTop: 20,
              borderWidth: 1,
            }}
          >
            <Image
              style={{ width: 150, height: 150 }}
              source={{
                uri: "https://brandlogos.net/wp-content/uploads/2013/09/fk-khazar-lankaran-vector-logo.png",
              }}
            />
            <View>
              <Text style={{ color: "white", fontSize: 18, fontWeight: "300" }}>
                Lankaran FC
              </Text>
              <Text
                style={{
                  color: "white",
                  marginTop: 10,
                  fontWeight: "300",
                  fontSize: 15,
                }}
              >
                Team Streange 2022
              </Text>
            </View>
          </View>
       </Link>
          
        </View>
      </ScrollView>
    </View>
  );
}
