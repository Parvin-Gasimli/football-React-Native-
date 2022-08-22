import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { Link } from "react-router-native";

import {
  FontAwesome,
  MaterialCommunityIcons,
  MaterialIcons,
  AntDesign,
} from "@expo/vector-icons";
import TabMenuBottom from "./TabMenuBottom";

const ClubScreen = () => {
  return (
    <View>
      <View
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          width: "96%",
          height: 70,
          paddingTop: 25,
          borderBottomColor: "black",
          borderBottomWidth: 1,
        }}
      >
        <Link to="/feed">
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
      <ScrollView style={{ height: "92%" }}>
        <View style={styles.images}>
          <Image
            style={{
              width: 200,
              height: 200,
              resizeMode: "contain",
            }}
            source={{
              uri: "https://media.istockphoto.com/vectors/made-in-the-uk-manufactured-in-britain-vector-id546443160?k=20&m=546443160&s=612x612&w=0&h=iSPdrAk0YN8yhpXntkoaN-OeeYozLXmgCg8g_7dti0E=",
            }}
          />
        </View>
        <View style={styles.cartinfo}>
          <Text style={styles.Khazar}>United Kingdom</Text>
          <Text>England</Text>
          <Text>Create At:10.02.2019</Text>
        </View>
        <View
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexDirection: "row",
            marginTop: 10,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "300" }}>3453</Text>
            <Text
              style={{
                fontSize: 17,
                fontWeight: "500",

                color: "black",
                padding: 3,
                borderRadius: 10,
                width: 100,
                textAlign: "center",
              }}
            >
              Like
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "300" }}>232</Text>
            <Text
              style={{
                fontSize: 17,
                fontWeight: "500",
                color: "black",
                padding: 3,
                borderRadius: 10,
                width: 100,
                textAlign: "center",
              }}
            >
              Comment
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "300" }}>6453</Text>
            <Text
              style={{
                fontSize: 17,
                fontWeight: "500",
                color: "black",
                padding: 3,
                borderRadius: 10,
                width: 100,
                textAlign: "center",
                fontWeight: "500",
              }}
            >
              See
            </Text>
          </View>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            marginTop: 20,
          }}
        >
          <Text
            style={{
              backgroundColor: "#09143c",
              color: "#fff",
              padding: 12,
              width: 170,
              textAlign: "center",
              borderRadius: 10,
            }}
          >
       Setting
          </Text>
          <Text
            style={{
              backgroundColor: "#09143c",
              color: "#fff",
              padding: 12,
              width: 170,
              textAlign: "center",
              borderRadius: 10,
            }}
          >
           Message
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexDirection: "row",
            marginTop: 20,
          }}
        >
          <Link
            style={{
              fontSize: 17,
              fontWeight: "500",
              backgroundColor: "#09143c",
              color: "white",

              borderRadius: 10,
              width: "98%",
              textAlign: "center",
            }}
            to="/clubdetail"
          >
            <Text
              style={{
                fontSize: 17,
                fontWeight: "400",
                backgroundColor: "#09143c",
                color: "white",
                padding: 12,
                borderRadius: 20,
                width: "98%",
                textAlign: "center",
              }}
            >
              Send Offer
            </Text>
          </Link>
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

          <Link to="/clubdetail">
            <MaterialIcons name="read-more" size={40} color="black" />
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
              uri: "data:image/jpeg;base64,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",
            }}
          />
          <Image
            style={styles.userPhoto}
            source={{
              uri: "https://turpkimi.com/files/posts/original/2021/12/13/9bad4637-73e9-41cb-83ba-d9ba67b7acc2/eb1e2da358264ee3b4cb6d3819ff38e2.jpg",
            }}
          />
          <Image
            style={styles.userPhoto}
            source={{
              uri: "https://www.azerisport.com//images/articles/2019/07/21/thumb20190721150449481.jpg?2021-07-05+11%3A32%3A27",
            }}
          />
          <Image
            style={styles.userPhoto}
            source={{
              uri: "https://cdn.trend.az/2018/03/16/qarabag_fc_160318_05.jpg",
            }}
          />
          <Image
            style={styles.userPhoto}
            source={{
              uri: "https://www.azernews.az/media/2017/11/01/trend_qarabax_atletiko_181017_(4).jpg",
            }}
          />
          <Image
            style={styles.userPhoto}
            source={{
              uri: "https://www.azernews.az/media/2019/08/01/qarabag_fc_qualifies_to_third_round_of_uefa_champions_league.jpg",
            }}
          />
          <Image
            style={styles.userPhoto}
            source={{
              uri: "https://cdn.trend.az/2022/02/18/qarabag_marsel_180222.jpg",
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
              uri: "https://media.istockphoto.com/vectors/made-in-the-uk-manufactured-in-britain-vector-id546443160?k=20&m=546443160&s=612x612&w=0&h=iSPdrAk0YN8yhpXntkoaN-OeeYozLXmgCg8g_7dti0E=",
            }}
          />
        </View>
      </ScrollView>

      <TabMenuBottom />
    </View>
  );
};
const styles = StyleSheet.create({
  images: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    flexDirection: "row",
    paddingTop: 20,
  },
  cartinfo: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  Khazar: {
    marginTop: 10,
    fontSize: 25,
    fontWeight: "bold",
    // fontWeight: 500,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    margin: 20,
  },
  count: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: 700,
  },
  name: {
    textAlign: "center",
    fontSize: 17,
  },
  smsfollow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  userPhoto: {
    width: 110,
    height: 150,
    resizeMode: "cover",
    marginBottom: 10,
    borderRadius: 4,
  },
});

export default ClubScreen;
