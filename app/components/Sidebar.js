import {
  FontAwesome5,
  Fontisto,
  MaterialIcons,
  Ionicons,
  Entypo,
  AntDesign,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import {
  Image,
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Link } from "react-router-native";

export default function Sidebar() {
  return (
    <View style={styles.container2}>
      <SafeAreaView>
        <TouchableOpacity style={{ alignItems: "flex-end", margin: 16 }}>
          <FontAwesome5 name="bars" size={24} color="#161924" />
        </TouchableOpacity>
      </SafeAreaView>
      <View style={styles.SidebarLEft}>
        <View style={styles.left}>
          <View>
            <Link to="/profile">
              <Image
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 100,
                  resizeMode: "contain",
                }}
                source={{
                  uri: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
                }}
              />
            </Link>
          </View>

          <View style={styles.leftText}>
            <Text style={styles.USerText}>Abbas Aliyev(Spectator)</Text>
            <Text style={styles.USerText}>Edit the information</Text>
          </View>
        </View>

        <View style={styles.Home1}>
          <Fontisto name="home" size={24} color="black" />
          <Link to="/">
            <Text style={styles.HomeText}>HOME</Text>
          </Link>
        </View>
        <View>
          <View style={styles.Homehead}>
            <View style={styles.Home}>
              <MaterialIcons name="live-tv" size={24} color="black" />
              <Text style={styles.HomeText}>WATCH THE GAME</Text>
            </View>
            <View style={styles.Home}>
              <Ionicons name="md-newspaper-outline" size={24} color="black" />
              <Text style={styles.HomeText}>NEWS</Text>
            </View>
            <View style={styles.Home}>
              <Entypo name="sports-club" size={24} color="black" />
              <Text style={styles.HomeText}>CLUBS</Text>
            </View>
            <View style={styles.Home}>
              <Ionicons name="football" size={24} color="black" />
              <Text style={styles.HomeText}>PLAYERS</Text>
            </View>
            <View style={styles.Home}>
              <MaterialIcons name="account-circle" size={24} color="black" />
              <Text style={styles.HomeText}>ACCOUNT</Text>
            </View>
            <Text style={styles.Others}>OTHER</Text>
            <View style={styles.Home}>
              <AntDesign name="setting" size={24} color="black" />
              <Text style={styles.HomeText}>SETTINGS</Text>
            </View>
            <View style={styles.Home}>
              <MaterialCommunityIcons
                name="shield-key"
                size={24}
                color="black"
              />
              <Text style={styles.HomeText}>PRIVACY</Text>
            </View>
            <View style={styles.Home}>
              <AntDesign name="infocirlceo" size={24} color="black" />
              <Text style={styles.HomeText}>ABOUT</Text>
            </View>
            <View style={styles.Home}>
              <Entypo name="help-with-circle" size={24} color="black" />
              <Text style={styles.HomeText}>SUPPORT</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container2: {
    backgroundColor: "#fff",
    marginTop: 50,
  },
  text: {
    color: "#161924",
    fontSize: 20,
    // fontWeight: 500,
  },

  USerText: {
    color: "white",
    marginTop: 5,
    fontSize: 17,
  },
  left: {
    padding: 20,
    backgroundColor: "black",
    width: "100%",
    display: "flex",
    flexDirection: "row",
  },
  leftText: {
    display: "flex",
    flexDirection: "column",
    marginLeft: 20,
    justifyContent: "center",
  },
  SidebarLEft: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    width: 320,
    height: "100%",
  },
  Home: {
    width: 320,
    padding: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: 60,
  },
  Home1: {
    width: 320,
    backgroundColor: "#fff",
    padding: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  Homehead: {
    backgroundColor: "lightgrey",
  },
  HomeText: {
    marginLeft: 10,
    fontSize: 17,
  },
  Others: {
    padding: 10,
    marginTop: 20,
    fontSize: 16,
  },
});
