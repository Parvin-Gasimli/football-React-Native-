import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { Link } from "react-router-native";
import { FontAwesome, AntDesign, EvilIcons } from "@expo/vector-icons";

export default function CreateGame() {
  return (
    
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
       
      <View style={styles.container}>
      <View
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          width: "96%",
          height: 80,
          paddingTop:35
        }}
      >
        <Link to="/">
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
       
      </View>
        <ImageBackground
          source={require("../assets/bgimages.jpeg")}
          style={styles.bgImg}
        >
          <Text style={styles.qeydiyyat}>CREATE GAME</Text>

          <Link style={styles.Link} to="/odenis">
            <View style={styles.a}>
              <FontAwesome name="random" size={24} color="white" />
              <Text style={{ color: "white", marginLeft: 20 }}>RANDOM</Text>
            </View>
          </Link>

          <Link to='/odenisInvite' style={styles.Link}>
            <View style={styles.a}>
              <AntDesign name="addusergroup" size={24} color="white" />
              <Text style={{ color: "white", marginLeft: 20 }}>INVITE</Text>
            </View>
          </Link>

          <Link style={styles.Link} to="/odenischempion">
            <View style={styles.a}>
              <EvilIcons name="trophy" size={24} color="white" />
              <Text style={{ color: "white", marginLeft: 20 }}>
                CHAMPIONSHIP
              </Text>
            </View>
          </Link>
        </ImageBackground>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  a: {
    backgroundColor: "rgb(32,37,61)",
    color: "white",
    borderRadius: 10,
    padding: 5,
    textAlign: "center",
    width: "65%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  Link: {
    backgroundColor: "rgb(32,37,61)",
    color: "white",
    borderRadius: 10,
    marginTop: 10,
    padding: 10,
    textAlign: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  qeydiyyat: {
    fontSize: 30,
    // fontWeight: 500,
    fontWeight: "bold",
    marginBottom: 30,
  },
  bgImg: {
    width: "100%",
    height: "100%",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
