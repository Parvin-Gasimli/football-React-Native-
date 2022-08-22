import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import Tabs from "./Tabs";
import YoutubePlayer from "react-native-youtube-iframe";
import TabMenuBottom from "./TabMenuBottomProfile";

export default function RealGame() {
  return (
    <View>
      <ScrollView style={{height:750}}>
        <View style={{ marginTop: 40 }}>
          <YoutubePlayer height={240} play={true} videoId={"CyyhTyfjzAA"} />
        </View>

        <View
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image
            style={{ width: 100, height: 100, resizeMode: "contain" }}
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8PgrxH5sFzNP6UIiZXzv11lZ84kDhajcvsinjjS727zzYOjFSmr5z8Y6AjwRiIPhhgJk&usqp=CAU",
            }}
          />
          <View>
            <View
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <Text style={{ fontSize: 30 }}>2</Text>
              <Text>-</Text>
              <Text style={{ fontSize: 30 }}>1</Text>
            </View>
            <View style={{ marginTop: 10 }}>
              <Text style={{ fontSize: 20 }}>1st half 25:52</Text>
            </View>
          </View>

          <Image
            style={{ width: 100, height: 100, resizeMode: "contain" }}
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/az/e/e3/Q%C9%99b%C9%99l%C9%99_FK_loqo.png",
            }}
          />
        </View>
        <Tabs />
      </ScrollView>
      <TabMenuBottom/>
    </View>
  );
}
