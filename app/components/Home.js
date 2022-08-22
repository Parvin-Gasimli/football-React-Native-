import { MaterialIcons, Ionicons } from "@expo/vector-icons";

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
} from "react-native";
import { Button } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "react-router-native";


export default function Home() {
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/photo1657106172.jpeg")}
          style={styles.bgImg}
        >
          <Text style={styles.qeydiyyat}>Sign up</Text>
          <Link style={styles.Link} to="/register">
            <View style={styles.a}>
              <MaterialIcons name="live-tv" size={30} color="white" />
              <Text style={{ color: "white", marginLeft: 20 }}>SPECTATORS</Text>
            </View>
          </Link>

          <Link style={styles.Link} to="/register">
            <View style={styles.a}>
              <Ionicons name="football" size={30} color="white" />

              <Text style={{ color: "white", marginLeft: 20 }}>PLAYERS</Text>
            </View>
          </Link>
          <Link style={styles.Link} to="/register">
            <View style={styles.a}>
              <MaterialIcons name="account-circle" size={30} color="white" />
              <Text style={{ color: "white", marginLeft: 20 }}>MANAGER</Text>
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
  bgImg: {
    width: "100%",
    height: "100%",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  a: {
    backgroundColor: "rgb(32,37,61)",
    color: "white",
    borderRadius: 10,
    textAlign: "center",
    width: "60%",
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
    fontSize: 40,
    marginBottom: 55,
    color: "rgb(32,37,61)",
    fontWeight: "bold",
  },
});
