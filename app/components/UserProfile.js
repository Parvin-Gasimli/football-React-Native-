import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import React from "react";
import {
  FontAwesome5,
  FontAwesome,
 
  MaterialCommunityIcons,
 
} from "@expo/vector-icons";
import UserprofileFollow from "./UserprofileFollow";
import { Link } from "react-router-native";
import TabMenuBottom from "./TabMenuBottom";

export default function UserProfile() {
  return (
    <View style={{ height: "100%" }}>
      <ScrollView >
        <View style={{ margin: 30 }}>
          <Link to="/side">
            <FontAwesome5 name="bars" size={24} color="#161924" />
          </Link>
        </View>

        <View style={styles.images}>
          <Image
            style={{
              width: 195,
              height: 195,
              borderRadius: 100,
              resizeMode: "contain",
            }}
            source={{
              uri: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
            }}
          />
        </View>
        <View style={styles.userinfo}>
          <Text style={styles.userText}>ABBAS ALIYEV</Text>
        </View>
        <View
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <View
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "center",
              borderWidth: 1,
              borderColor: "#242761",
              width: 240,
              backgroundColor: "#242761",
              borderRadius: 25,
              marginTop:10
            }}
          >
            <Text
              style={{
                color: "white",
                width: 100,
                padding: 10,
                borderRadius: 15,
                textAlign: "center",
                padding: 10,
              }}
            >
              Scoulting
            </Text>
            <Text
              style={{
                color: "white",
                backgroundColor: "white",
                color: "#242761",
                padding: 10,
                borderRadius: 20,
                width: 120
              }}
            >
              Spectator
            </Text>
          </View>
        </View>

        <UserprofileFollow />

        <View style={styles.smsfollow}>
          <Image
            style={{
              width: 30,
              height: 20,

              resizeMode: "contain",
            }}
            source={{
              uri: "https://istalya.com/image/cache/catalog/resimler/Varl%C4%B1k%201-1080x1080w.png",
            }}
          />
          <Text
            style={{
              backgroundColor: "#030368",
              color: "#fff",
              padding: 12,
              width: 170,
              textAlign: "center",
              borderRadius: 10,
            }}
          >
            Profili Duzenle
          </Text>
        </View>
        <View
          style={{
            margin: 10,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <MaterialCommunityIcons
            name="grid"
            style={{ borderBottomColor: "black", borderBottomWidth: 1 }}
            size={24}
            color="black"
          />
          <FontAwesome name="video-camera" size={24} color="black" />

          <Link to="/playerDetail">
            <FontAwesome5 name="user-cog" size={24} color="black" />
          </Link>
        </View>
        <View
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            flexDirection: "row",
          }}
        >
          <Image
            style={styles.userPhoto}
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8qfD5tbmxHJo0_J7VMpLErfzFrPYpcxo9eQ&usqp=CAU",
            }}
          />
          <Image
            style={styles.userPhoto}
            source={{
              uri: "https://lottowins.org/wp-content/uploads/2022/01/football.jpeg",
            }}
          />
          <Image
            style={styles.userPhoto}
            source={{
              uri: "https://cdn-wp.thesportsrush.com/2019/12/Liverpool-Transfer-news-The-Reds-have-agreed-a-January-deal-with-Red-Bull-Salzburg%E2%80%99s-Takumi-Minamino-for-%C2%A37.25-million.png",
            }}
          />
          <Image
            style={styles.userPhoto}
            source={{
              uri: "https://media.minutemediacdn.com/process?url=https%3A%2F%2F90min-images-original.s3.amazonaws.com%2Fproduction%2Fliverpool-fc-v-rb-salzburg-group-e-uefa-champions-league-5df20da9992e03748c000002.jpg&filters%5Bcrop%5D%5Bw%5D=0.8361904761904762&filters%5Bcrop%5D%5Bh%5D=0.9407142857142857&filters%5Bcrop%5D%5Bo_x%5D=0.08&filters%5Bcrop%5D%5Bo_y%5D=0.04&filters%5Bquality%5D%5Btarget%5D=80&type=.jpg&filters%5Bresize%5D%5Bw%5D=630&filters%5Bresize%5D%5Bh%5D=472",
            }}
          />
          <Image
            style={styles.userPhoto}
            source={{
              uri: "https://media.minutemediacdn.com/process?url=https%3A%2F%2F90min-images-original.s3.amazonaws.com%2Fproduction%2Fliverpool-fc-v-rb-salzburg-group-e-uefa-champions-league-5df20da9992e03748c000002.jpg&filters%5Bcrop%5D%5Bw%5D=0.8361904761904762&filters%5Bcrop%5D%5Bh%5D=0.9407142857142857&filters%5Bcrop%5D%5Bo_x%5D=0.08&filters%5Bcrop%5D%5Bo_y%5D=0.04&filters%5Bquality%5D%5Btarget%5D=80&type=.jpg&filters%5Bresize%5D%5Bw%5D=630&filters%5Bresize%5D%5Bh%5D=472",
            }}
          />
          <Image
            style={styles.userPhoto}
            source={{
              uri: "https://media.minutemediacdn.com/process?url=https%3A%2F%2F90min-images-original.s3.amazonaws.com%2Fproduction%2Fliverpool-fc-v-rb-salzburg-group-e-uefa-champions-league-5df20da9992e03748c000002.jpg&filters%5Bcrop%5D%5Bw%5D=0.8361904761904762&filters%5Bcrop%5D%5Bh%5D=0.9407142857142857&filters%5Bcrop%5D%5Bo_x%5D=0.08&filters%5Bcrop%5D%5Bo_y%5D=0.04&filters%5Bquality%5D%5Btarget%5D=80&type=.jpg&filters%5Bresize%5D%5Bw%5D=630&filters%5Bresize%5D%5Bh%5D=472",
            }}
          />
          <Image
            style={styles.userPhoto}
            source={{
              uri: "https://img.olympicchannel.com/images/image/private/t_16-9_360-203_2x/f_auto/v1538355600/primary/ngdjbafv3twathukjbq2",
            }}
          />
          <Image
            style={styles.userPhoto}
            source={{
              uri: "https://img.olympicchannel.com/images/image/private/t_16-9_360-203_2x/f_auto/v1538355600/primary/ngdjbafv3twathukjbq2",
            }}
          />
          <Image
            style={styles.userPhoto}
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs3PkwC9Z2WycPXEGZyNoVe-67OjEoxpPj8Un5x9y4l9jzh4zs2WL-0Nu6FkLMBMun2s0&usqp=CAU",
            }}
          />
        </View>
      </ScrollView>
      <TabMenuBottom />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  images: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  userinfo: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  userText: {
    padding: 2,
    fontSize: 20,
  },
  userLocation: {
    fontSize: 12,
    // fontWeight: 700,
  },
  userList: {
    display: "flex",
    justifyContent: "space-evenly",
  },
  smsfollow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  userLogo: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  userPhoto: {
    width: 110,
    height: 150,
    resizeMode: "cover",
    marginBottom: 10,
    borderRadius: 4,
  },
});
