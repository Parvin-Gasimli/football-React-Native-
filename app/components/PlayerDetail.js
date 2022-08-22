import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import TabMenuBottom from "./TabMenuBottomProfile";
import { AntDesign } from "@expo/vector-icons";
import { Link } from "react-router-native";
export default function PlayerDetail() {
  return (
    <View>
       <View
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
          width: "96%",
          marginTop: 40,
          padding: 10
        }}
      >
        <Link to="/playprofile">
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
            Profile Detail
          </Text>
        </View>
      </View>
      <ScrollView>
        <View>
          <View
            style={{  backgroundColor: "black", paddingTop: 30,  }}
          >
            <View style={{display:'flex',justifyContent:'space-around',flexDirection:'row',alignItems:'center'}}>
              <Image
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 100,
                  resizeMode: "contain",
                }}
                source={{
                  uri: "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt3e8c28a3b8d9e0ea/62b506ae7295480f40bc325e/IMG_6835.jpg",
                }}
              />
              <View>
                <Text
                  style={{
                    color: "white",
                    fontSize: 13,
                    fontWeight: "400",
                    marginTop: 5,
                  }}
                >
                 Neymar da Silva Santos Júnior
                </Text>
                <Text
                  style={{
                    color: "white",
                    fontSize: 15,
                    fontWeight: "400",
                    marginTop: 5,
                  }}
                >
               Brazil
                </Text>
              </View>
            </View>
          </View>
          <View style={{ backgroundColor: "black", padding: 20 }}>
            <Text style={{ color: "white" }}>Player Details</Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
                marginTop: 20,
                backgroundColor: "rgb(25,40,70)",
                padding: 20,
                borderRadius: 20,
                shadowColor: "white",
                shadowOffset: {
                  width: 100,
                  height: 100,
                },
                shadowOpacity: 0.7,
                shadowRadius: 8.84,
                elevation: 10,
              }}
            >
              <View>
                <Image
                  source={{
                    uri: "https://upload.wikimedia.org/wikipedia/en/1/16/FK_Baku.png",
                  }}
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 100,
                    resizeMode: "cover",
                  }}
                />
                <Text
                  style={{ color: "white", textAlign: "center", marginTop: 10 }}
                >
                  Baki
                </Text>
              </View>

              <View>
                <Image
                  source={{
                    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJHoGZ7DR6QQINSO1evGHRvEoBD7ujM3QEIFqFlOVdOt7iQ7dHbXDhbBxxlqE7gVO8nVk&usqp=CAU",
                  }}
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 100,
                    resizeMode: "cover",
                  }}
                />
                <Text
                  style={{ color: "white", textAlign: "center", marginTop: 10 }}
                >
                  Inter
                </Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: "rgb(25,40,70)",
                marginTop: 20,
                borderRadius: 15,
                padding: 15,
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
                alignItems: "center",
                width: "100%",
                shadowColor: "white",
                shadowOffset: {
                  width: 100,
                  height: 100,
                },
                shadowOpacity: 0.7,
                shadowRadius: 3.84,
                elevation: 10,
              }}
            >
              <View>
                <View style={{ marginBottom: 10 }}>
                  <Text style={{ color: "white", lineHeight: 24 }}>
                    29Years
                  </Text>
                  <Text style={{ color: "white", lineHeight: 24 }}>
                    4/35/1993
                  </Text>
                </View>
                <View>
                  <Text style={{ color: "white", lineHeight: 24 }}>67kq</Text>
                  <Text style={{ color: "white", lineHeight: 24 }}>Weight</Text>
                </View>
              </View>
              <View>
                <View>
                  <Text style={{ color: "white", lineHeight: 24 }}>183cm</Text>
                  <Text style={{ color: "white", lineHeight: 24 }}>Heigth</Text>
                </View>
                <View>
                  <Text style={{ color: "white", lineHeight: 24 }}>ST</Text>
                  <Text style={{ color: "white", lineHeight: 24 }}>
                    Position
                  </Text>
                </View>
              </View>
              <View>
                <View>
                  <Text style={{ color: "white", lineHeight: 24 }}>18</Text>
                  <Text style={{ color: "white", lineHeight: 24 }}>
                    Jarsery Number
                  </Text>
                </View>
                <View>
                  <Text style={{ color: "white", lineHeight: 24 }}>LEFT</Text>
                  <Text style={{ color: "white", lineHeight: 24 }}>
                    Preferred Foot
                  </Text>
                </View>
              </View>
            </View>

            <View>
              <Text style={{ color: "white", marginTop: 10 }}>Status</Text>
            </View>

            <View
              style={{
                padding: 20,
                backgroundColor: "rgb(25,40,70)",
                marginTop: 20,
                borderRadius: 20,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Image
                  source={{
                    uri: "https://image.shutterstock.com/image-vector/football-soccer-stadium-vector-gradient-260nw-180264014.jpg",
                  }}
                  style={{
                    width: 50,
                    height: 50,
                    resizeMode: "contain",
                    borderRadius: 100,
                  }}
                />
                <Text
                  style={{ color: "white", textAlign: "center", marginTop: 10 }}
                >
                  74
                </Text>
                <Text style={{ color: "white", textAlign: "center" }}>
                  Appearances
                </Text>
              </View>
              <View>
                <Image
                  source={{
                    uri: "data:image/png;base64,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",
                  }}
                  style={{
                    width: 50,
                    height: 50,
                    resizeMode: "contain",
                    borderRadius: 100,
                  }}
                />
                <Text
                  style={{ color: "white", textAlign: "center", marginTop: 10 }}
                >
                  35
                </Text>
                <Text style={{ color: "white", textAlign: "center" }}>
                  Goals
                </Text>
              </View>
              <View>
                <Image
                  source={{
                    uri: "https://i.sportisimo.com/cms/Sportisimo.com/how_to_choose/football/football_shoes_menu.jpg",
                  }}
                  style={{
                    width: 50,
                    height: 50,
                    resizeMode: "contain",
                    borderRadius: 100,
                  }}
                />
                <Text
                  style={{ color: "white", textAlign: "center", marginTop: 10 }}
                >
                  12
                </Text>
                <Text style={{ color: "white", textAlign: "center" }}>
                  Assist
                </Text>
              </View>
              <View>
                <Image
                  source={{
                    uri: "https://s3.amazonaws.com/ionic-marketplace/ionicratings/screenshot_1.png",
                  }}
                  style={{
                    width: 50,
                    height: 50,
                    resizeMode: "contain",
                    borderRadius: 100,
                  }}
                />
                <Text
                  style={{ color: "white", textAlign: "center", marginTop: 10 }}
                >
                  7.9
                </Text>
                <Text style={{ color: "white", textAlign: "center" }}>
                  Ratings
                </Text>
              </View>
            </View>
            <Text style={{ color: "white", marginTop: 10 }}>Trophies</Text>
            <View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: "white",
                    borderWidth: 1,
                    borderColor: "white",
                    backgroundColor: "#3498db",
                    padding: 10,
                    width: "40%",
                    textAlign: "center",
                  }}
                >
                  Club
                </Text>
                <Text
                  style={{
                    color: "#3498db",
                    borderWidth: 1,
                    borderColor: "white",
                    padding: 10,
                    backgroundColor: "#2c3e50",
                  }}
                >
                  International
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 20,
                }}
              >
                <View>
                  <Image
                    source={{
                      uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Football-Cup.svg/300px-Football-Cup.svg.png?20110301224031",
                    }}
                    style={{
                      width: 100,
                      height: 100,
                      resizeMode: "contain",
                    }}
                  />
                </View>
                <View>
                  <Image
                    source={{
                      uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Football-Cup.svg/300px-Football-Cup.svg.png?20110301224031",
                    }}
                    style={{
                      width: 100,
                      height: 100,
                      resizeMode: "contain",
                    }}
                  />
                </View>
                <View>
                  <Image
                    source={{
                      uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Football-Cup.svg/300px-Football-Cup.svg.png?20110301224031",
                    }}
                    style={{
                      width: 100,
                      height: 100,
                      resizeMode: "contain",
                    }}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
   <TabMenuBottom/>

    
    </View>
  );
}
