import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Entypo, Feather, AntDesign, FontAwesome } from "@expo/vector-icons";
import { Link } from "react-router-native";
export default function TabMenuBottom() {
  return (
    <View style={styles.menu}>
      <View style={styles.menuItem}>
      <Link to='/feed'>
      <View style={styles.menuIcons}>
          <Entypo name="home" size={30} color="rgb(32,37,61)" />
          {/* <Text style={{ color: "white" }}>Feed</Text> */}
        </View></Link>
        <View style={styles.menuIcons}>
          <Entypo name="sports-club" size={30} color="rgb(32,37,61)" />
          {/* <Text style={{ color: "white" }}>Club</Text> */}
        </View>
        <Link to='/creategame'>
        <View style={styles.menuIcons}>
          <Feather name="plus-circle" size={30} color="rgb(32,37,61)e" />
        </View></Link>
      
        <View style={styles.menuIcons}>
          <FontAwesome name="soccer-ball-o" size={30} color="rgb(32,37,61)" />
          {/* <Text  style={{ color: "white" }}>Feed</Text> */}
        </View>
        <Link to="/profile">
          <View style={styles.menuIcons}>
            <AntDesign name="user" size={30} color="rgb(32,37,61)" />
            {/* <Text  style={{ color: "white" }}>Profile</Text> */}
          </View>
        </Link>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  menu: {
    marginTop: 20,
    paddingTop: 40,
    
  
  },
  menuItem: {
    
    position: "absolute",
    bottom:0 ,
    left: 0,
    right: 0,
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "row",
    backgroundColor: "white",
    flexWrap:'wrap',
    padding: 6,
    height: 60,
    width: '100%',
    
  },
  menuIcons: {
    backgroundColor: "",
    padding: 10,
    borderRadius: 10,
    backgroundColor: "white",

    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
