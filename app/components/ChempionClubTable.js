import { View, Text, ScrollView } from "react-native";
import React from "react";
import { Link } from "react-router-native";

import { AntDesign } from "@expo/vector-icons";


export default function ChempionClubTable() {
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
            ChempionShip
          </Text>
        </View>
      </View>

      <ScrollView>
        <View style={{ backgroundColor: "#242761", width: "100%" }}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "94%",
              marginLeft: 7,
              borderWidth: 1,
              borderColor: "white",
              marginTop: 30,
              marginBottom: 10,
              borderRadius: 5,
              padding: 10,
            }}
          >
            <Text style={{ color: "white", padding: 4 }}>Team</Text>
            <Text style={{ color: "white", padding: 4 }}>P</Text>
            <Text style={{ color: "white", padding: 4 }}>W</Text>
            <Text style={{ color: "white", padding: 4 }}>D</Text>
            <Text style={{ color: "white", padding: 4 }}>L</Text>
            <Text style={{ color: "white", padding: 4 }}>F</Text>
            <Text style={{ color: "white", padding: 4 }}>A</Text>
            <Text style={{ color: "white", padding: 4 }}>+/-</Text>
            <Text style={{ color: "white", padding: 4 }}>PTS</Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "94%",
              marginLeft: 7,
              borderWidth: 1,
              borderColor: "white",
              marginTop: 4,
              marginBottom: 10,
              borderRadius: 5,
              padding: 10,
            }}
          >
            <Text style={{ color: "white" }}>Team Name</Text>
            <Text style={{ color: "white" }}>0</Text>
            <Text style={{ color: "white" }}>0</Text>
            <Text style={{ color: "white" }}>0</Text>
            <Text style={{ color: "white" }}>0</Text>
            <Text style={{ color: "white" }}>0</Text>
            <Text style={{ color: "white" }}>0</Text>
            <Text style={{ color: "white" }}>0</Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "94%",
              marginLeft: 7,
              borderWidth: 1,
              borderColor: "white",
              marginTop: 4,
              marginBottom: 10,
              borderRadius: 5,
              padding: 10,
            }}
          >
            <Text style={{ color: "white" }}>Team Name</Text>
            <Text style={{ color: "white" }}>0</Text>
            <Text style={{ color: "white" }}>6</Text>
            <Text style={{ color: "white" }}>7</Text>
            <Text style={{ color: "white" }}>4</Text>
            <Text style={{ color: "white" }}>0</Text>
            <Text style={{ color: "white" }}>6</Text>
            <Text style={{ color: "white" }}>1</Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "94%",
              marginLeft: 7,
              borderWidth: 1,
              borderColor: "white",
              marginTop: 4,
              marginBottom: 10,
              borderRadius: 5,
              padding: 10,
            }}
          >
            <Text style={{ color: "white" }}>Team Name</Text>
            <Text style={{ color: "white" }}>5</Text>
            <Text style={{ color: "white" }}>4</Text>
            <Text style={{ color: "white" }}>3</Text>
            <Text style={{ color: "white" }}>6</Text>
            <Text style={{ color: "white" }}>8</Text>
            <Text style={{ color: "white" }}>2</Text>
            <Text style={{ color: "white" }}>1</Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "94%",
              marginLeft: 7,
              borderWidth: 1,
              borderColor: "white",
              marginTop: 4,
              marginBottom: 10,
              borderRadius: 5,
              padding: 10,
            }}
          >
            <Text style={{ color: "white" }}>Team Name</Text>
            <Text style={{ color: "white" }}>0</Text>
            <Text style={{ color: "white" }}>0</Text>
            <Text style={{ color: "white" }}>5</Text>
            <Text style={{ color: "white" }}>3</Text>
            <Text style={{ color: "white" }}>1</Text>
            <Text style={{ color: "white" }}>7</Text>
            <Text style={{ color: "white" }}>0</Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "94%",
              marginLeft: 7,
              borderWidth: 1,
              borderColor: "white",
              marginTop: 4,
              marginBottom: 10,
              borderRadius: 5,
              padding: 10,
            }}
          >
            <Text style={{ color: "white" }}>Team Name</Text>
            <Text style={{ color: "white" }}>4</Text>
            <Text style={{ color: "white" }}>5</Text>
            <Text style={{ color: "white" }}>7</Text>
            <Text style={{ color: "white" }}>1</Text>
            <Text style={{ color: "white" }}>8</Text>
            <Text style={{ color: "white" }}>0</Text>
            <Text style={{ color: "white" }}>0</Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "94%",
              marginLeft: 7,
              borderWidth: 1,
              borderColor: "white",
              marginTop: 4,
              marginBottom: 10,
              borderRadius: 5,
              padding: 10,
            }}
          >
            <Text style={{ color: "white" }}>Team Name</Text>
            <Text style={{ color: "white" }}>1</Text>
            <Text style={{ color: "white" }}>6</Text>
            <Text style={{ color: "white" }}>2</Text>
            <Text style={{ color: "white" }}>6</Text>
            <Text style={{ color: "white" }}>4</Text>
            <Text style={{ color: "white" }}>1</Text>
            <Text style={{ color: "white" }}>0</Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "94%",
              marginLeft: 7,
              borderWidth: 1,
              borderColor: "white",
              marginTop: 4,
              marginBottom: 10,
              borderRadius: 5,
              padding: 10,
            }}
          >
            <Text style={{ color: "white" }}>Team Name</Text>
            <Text style={{ color: "white" }}>12</Text>
            <Text style={{ color: "white" }}>54</Text>
            <Text style={{ color: "white" }}>33</Text>
            <Text style={{ color: "white" }}>22</Text>
            <Text style={{ color: "white" }}>34</Text>
            <Text style={{ color: "white" }}>33</Text>
            <Text style={{ color: "white" }}>23</Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "94%",
              marginLeft: 7,
              borderWidth: 1,
              borderColor: "white",
              marginTop: 4,
              marginBottom: 10,
              borderRadius: 5,
              padding: 10,
            }}
          >
            <Text style={{ color: "white" }}>Team Name</Text>
            <Text style={{ color: "white" }}>4</Text>
            <Text style={{ color: "white" }}>4</Text>
            <Text style={{ color: "white" }}>23</Text>
            <Text style={{ color: "white" }}>12</Text>
            <Text style={{ color: "white" }}>54</Text>
            <Text style={{ color: "white" }}>32</Text>
            <Text style={{ color: "white" }}>76</Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "94%",
              marginLeft: 7,
              borderWidth: 1,
              borderColor: "white",
              marginTop: 4,
              marginBottom: 10,
              borderRadius: 5,
              padding: 10,
            }}
          >
            <Text style={{ color: "white" }}>Team Name</Text>
            <Text style={{ color: "white" }}>12</Text>
            <Text style={{ color: "white" }}>34</Text>
            <Text style={{ color: "white" }}>45</Text>
            <Text style={{ color: "white" }}>33</Text>
            <Text style={{ color: "white" }}>12</Text>
            <Text style={{ color: "white" }}>33</Text>
            <Text style={{ color: "white" }}>54</Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "94%",
              marginLeft: 7,
              borderWidth: 1,
              borderColor: "white",
              marginTop: 4,
              marginBottom: 10,
              borderRadius: 5,
              padding: 10,
            }}
          >
            <Text style={{ color: "white" }}>Team Name</Text>
            <Text style={{ color: "white" }}>3</Text>
            <Text style={{ color: "white" }}>5</Text>
            <Text style={{ color: "white" }}>6</Text>
            <Text style={{ color: "white" }}>7</Text>
            <Text style={{ color: "white" }}>4</Text>
            <Text style={{ color: "white" }}>12</Text>
            <Text style={{ color: "white" }}>22</Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "94%",
              marginLeft: 7,
              borderWidth: 1,
              borderColor: "white",
              marginTop: 4,
              marginBottom: 10,
              borderRadius: 5,
              padding: 10,
            }}
          >
            <Text style={{ color: "white" }}>Team Name</Text>
            <Text style={{ color: "white" }}>3</Text>
            <Text style={{ color: "white" }}>5</Text>
            <Text style={{ color: "white" }}>6</Text>
            <Text style={{ color: "white" }}>7</Text>
            <Text style={{ color: "white" }}>4</Text>
            <Text style={{ color: "white" }}>12</Text>
            <Text style={{ color: "white" }}>22</Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "94%",
              marginLeft: 7,
              borderWidth: 1,
              borderColor: "white",
              marginTop: 4,
              marginBottom: 10,
              borderRadius: 5,
              padding: 10,
            }}
          >
            <Text style={{ color: "white" }}>Team Name</Text>
            <Text style={{ color: "white" }}>3</Text>
            <Text style={{ color: "white" }}>5</Text>
            <Text style={{ color: "white" }}>6</Text>
            <Text style={{ color: "white" }}>7</Text>
            <Text style={{ color: "white" }}>4</Text>
            <Text style={{ color: "white" }}>12</Text>
            <Text style={{ color: "white" }}>22</Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "94%",
              marginLeft: 7,
              borderWidth: 1,
              borderColor: "white",
              marginTop: 4,
              marginBottom: 10,
              borderRadius: 5,
              padding: 10,
            }}
          >
            <Text style={{ color: "white" }}>Team Name</Text>
            <Text style={{ color: "white" }}>3</Text>
            <Text style={{ color: "white" }}>5</Text>
            <Text style={{ color: "white" }}>6</Text>
            <Text style={{ color: "white" }}>7</Text>
            <Text style={{ color: "white" }}>4</Text>
            <Text style={{ color: "white" }}>12</Text>
            <Text style={{ color: "white" }}>22</Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "94%",
              marginLeft: 7,
              borderWidth: 1,
              borderColor: "white",
              marginTop: 4,
              marginBottom: 10,
              borderRadius: 5,
              padding: 10,
            }}
          >
            <Text style={{ color: "white" }}>Team Name</Text>
            <Text style={{ color: "white" }}>3</Text>
            <Text style={{ color: "white" }}>5</Text>
            <Text style={{ color: "white" }}>6</Text>
            <Text style={{ color: "white" }}>7</Text>
            <Text style={{ color: "white" }}>4</Text>
            <Text style={{ color: "white" }}>12</Text>
            <Text style={{ color: "white" }}>22</Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "94%",
              marginLeft: 7,
              borderWidth: 1,
              borderColor: "white",
              marginTop: 4,
              marginBottom: 10,
              borderRadius: 5,
              padding: 10,
            }}
          >
            <Text style={{ color: "white" }}>Team Name</Text>
            <Text style={{ color: "white" }}>3</Text>
            <Text style={{ color: "white" }}>5</Text>
            <Text style={{ color: "white" }}>6</Text>
            <Text style={{ color: "white" }}>7</Text>
            <Text style={{ color: "white" }}>4</Text>
            <Text style={{ color: "white" }}>12</Text>
            <Text style={{ color: "white" }}>22</Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "94%",
              marginLeft: 7,
              borderWidth: 1,
              borderColor: "white",
              marginTop: 4,
              marginBottom: 10,
              borderRadius: 5,
              padding: 10,
            }}
          >
            <Text style={{ color: "white" }}>Team Name</Text>
            <Text style={{ color: "white" }}>3</Text>
            <Text style={{ color: "white" }}>5</Text>
            <Text style={{ color: "white" }}>6</Text>
            <Text style={{ color: "white" }}>7</Text>
            <Text style={{ color: "white" }}>4</Text>
            <Text style={{ color: "white" }}>12</Text>
            <Text style={{ color: "white" }}>22</Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "94%",
              marginLeft: 7,
              borderWidth: 1,
              borderColor: "white",
              marginTop: 4,
              marginBottom: 10,
              borderRadius: 5,
              padding: 10,
            }}
          >
            <Text style={{ color: "white" }}>Team Name</Text>
            <Text style={{ color: "white" }}>3</Text>
            <Text style={{ color: "white" }}>5</Text>
            <Text style={{ color: "white" }}>6</Text>
            <Text style={{ color: "white" }}>7</Text>
            <Text style={{ color: "white" }}>4</Text>
            <Text style={{ color: "white" }}>12</Text>
            <Text style={{ color: "white" }}>22</Text>
          </View>
        </View>
      </ScrollView>
      
    </View>
  );
}
