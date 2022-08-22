import { View, Text, ScrollView, ImageBackground, Image } from "react-native";
import React from "react";
import TabMenuBottom from "./TabMenuBottom";
import {
  AntDesign,
} from "@expo/vector-icons";

import { Link } from "react-router-native";

export default function ClubDetail() {
  const cempionatdata = [
    {
      id: 1,
      time: "20/12",
      images:
        "data:image/png;base64,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",
      hesab: "...__...",
      satatusImg:
        "https://icon-library.com/images/loading-icon-transparent-background/loading-icon-transparent-background-12.jpg",
    },
    {
      id: 2,
      time: "12/06",
      images:
        "https://upload.wikimedia.org/wikipedia/tr/b/b6/Manchester_United_FC_logo.png",
      hesab: "6-3",
      satatusImg: "https://cdn-icons-png.flaticon.com/512/845/845646.png",
    },
    {
      id: 3,
      time: "10/07",
      images:
        "https://upload.wikimedia.org/wikipedia/az/1/1b/Araz-Nax%C3%A7%C4%B1van_PFK_loqo.jpg",
      hesab: "2-1",
      satatusImg: "https://cdn-icons-png.flaticon.com/512/845/845646.png",
    },
    {
      id: 4,
      time: "07/12",
      images: "https://upload.wikimedia.org/wikipedia/tr/7/75/Gabalafk.png",
      hesab: "3-2",
      satatusImg:
        "https://cdn-icons.flaticon.com/png/128/2569/premium/2569174.png?token=exp=1658317170~hmac=e806fddd4ccca73dc824e0e7ed0d221a",
    },
    {
      id: 5,
      time: "14/02",
      images:
        "https://img.favpng.com/11/19/14/school-logo-emblem-ninja-colegio-san-marcelo-la-granja-png-favpng-321KnMdCvY3TzAirtFsAHCuSX.jpg",
      hesab: "4-4",
      satatusImg: "https://cdn-icons-png.flaticon.com/512/845/845646.png",
    },
    {
      id: 6,
      time: "29/02",
      images: "https://pbs.twimg.com/media/EwvuEcKXEAA9bl9.jpg:large",
      hesab: "5-2",
      satatusImg:
        "https://cdn-icons.flaticon.com/png/128/2569/premium/2569174.png?token=exp=1658317170~hmac=e806fddd4ccca73dc824e0e7ed0d221a",
    },
  ];
  const player = [
    {
      id: 1,
      images:
        "https://cdn.ntvspor.net/b038d3226801482b82fd1d35cde2dee1.jpg?mode=crop&w=940&h=626",
      name: "Cristian Ronaldo",
      goals: 20,
      as: 35,
      rating: 4.5,
    },
    {
      id: 2,
      images:
        "https://pbs.twimg.com/profile_images/1484986622101921800/DIsteJ6a_400x400.jpg",
      name: "Diago Dolat",
      goals: 20,
      as: 33,
      rating: 6.3,
    },
    {
      id: 3,
      images:
        "http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcTYCpjobPi_idE7M0dpfXTZYNsYeVaYj5J779PrvdojCAP-j9CdbaOb5r4waiSq0nKS",
      name: "Caydon Sanso",
      goals: 20,
      as: 48,
      rating: 8.5,
    },
    {
      id:4,
      images:
        "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSQH38wNKbqwxAccC9vSS4ou4DEDXf7Hm7D5w2xvcUaU4KJJQLeb3aj0rnyHcxyiy_0",
      name: "Burno Fendares",
      goals: 34,
      as: 10,
      rating: 5.4,
    },
    {
      id: 5,
      images:
        "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcTOXtTycQ3_UMCn53IzbqPfiU2cRiXYRi6Yp-kM7AeC2N5f8eYs3L-Ld4-1BLDLmmrZ",
      name: "Luke Shaw",
      goals: 12,
      as: 32,
      rating: 8.5,
    },
  ];
  return (
    <View>
      <View
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          width: "96%",
          height: 70,
          paddingTop: 30,
        }}
      >
        <Link to="/clubscreen">
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

      <ScrollView style={{height:"92%"}}>
        <View>
          <ImageBackground
            source={require("../assets/profildetail.jpg")}
            style={{
              width: "100%",
              height: 130,
            }}
          />
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              position: "absolute",
              top: 25,
            }}
          >
            <Image
              style={{
                width: 70,
                height: 70,
                borderRadius: 100,
                resizeMode: "contain",
              }}
              source={{
                uri: "https://media.istockphoto.com/vectors/made-in-the-uk-manufactured-in-britain-vector-id546443160?k=20&m=546443160&s=612x612&w=0&h=iSPdrAk0YN8yhpXntkoaN-OeeYozLXmgCg8g_7dti0E=",
              }}
            />
            <Text
              style={{
                color: "white",
                fontSize: 18,
                fontWeight: "bold",

                textAlign: "center",
              }}
            >
          United Kingdom
            </Text>
          </View>
          <View style={{ backgroundColor: "black", padding: 10 }}>
            <Text style={{ color: "white", margin: 20 }}>Team Details</Text>
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
                <View
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginBottom: 20,
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      fontSize: 18,
                      lineHeight: 30,
                      fontWeight: "600",
                    }}
                  >
                    96
                  </Text>
                  <Text
                    style={{ color: "white", fontSize: 16, fontWeight: "200" }}
                  >
                    Total Matches
                  </Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    flexDirection: "row",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        color: "white",
                        fontSize: 20,
                        fontWeight: "500",
                      }}
                    >
                      60
                    </Text>
                    <Text
                      style={{
                        color: "white",
                        fontSize: 15,
                        fontWeight: "300",
                        lineHeight: 30,
                      }}
                    >
                      WIN
                    </Text>
                  </View>
                  <View
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        color: "white",
                        fontSize: 20,
                        fontWeight: "500",
                      }}
                    >
                      35
                    </Text>
                    <Text
                      style={{
                        color: "white",
                        fontSize: 15,
                        fontWeight: "300",
                        lineHeight: 30,
                      }}
                    >
                      DROW
                    </Text>
                  </View>
                  <View
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        color: "white",
                        fontSize: 20,
                        fontWeight: "500",
                      }}
                    >
                      30
                    </Text>
                    <Text
                      style={{
                        color: "white",
                        fontSize: 15,
                        fontWeight: "300",
                        lineHeight: 30,
                      }}
                    >
                      LOS
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                padding: 10,
              }}
            >
              <Text style={{ color: "white", fontSize: 16 }}>Payers</Text>

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: 10,
                  width: "50%",
                }}
              >
                <Text style={{ color: "white", fontSize: 16 }}>Goals</Text>
                <Text style={{ color: "white", fontSize: 16 }}>AS</Text>
                <Text style={{ color: "white", fontSize: 16 }}>RT</Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: "rgb(25,40,70)",
                marginTop: 4,
                borderRadius: 15,
                paddingTop: 30,

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
              {player.length > 0 ? (
                player.map((player, id) => (
                  <View
                    key={`played_ui_id${id}`}
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-around",
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "center",
                      }}
                    >
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        <Image
                          source={{ uri: player.images }}
                          style={{
                            width: 55,
                            height: 55,
                            borderRadius: 50,
                            resizeMode: "contain",
                            marginRight: 10,
                            marginBottom: 10,
                          }}
                        />
                        <Text style={{ color: "white", fontSize: 14 }}>
                          {player.name}
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "baseline",
                      }}
                    >
                      <Text style={{ color: "white", fontSize: 15 }}>
                        {player.goals}
                      </Text>
                    </View>
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "baseline",
                      }}
                    >
                      <Text style={{ color: "white", fontSize: 15 }}>
                        {player.as}
                      </Text>
                    </View>
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        backgroundColor: "teal",
                        width: 50,
                        padding: 5,
                        borderRadius: 4,
                      }}
                    >
                      <Text style={{ color: "white", fontSize: 15 }}>
                        {player.rating}
                      </Text>
                    </View>
                  </View>
                ))
              ) : (
                <View
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={{
                      uri: "https://icon-library.com/images/loading-icon-transparent-background/loading-icon-transparent-background-12.jpg",
                      width: 30,
                      height: 30,
                      resizeMode: "contain",
                    }}
                  />
                </View>
              )}
            </View>

            <View style={{}}>
              <Text style={{ color: "white", margin: 20 }}>Status</Text>
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
                flexWrap: "wrap",
              }}
            >
              {cempionatdata.length > 0 ? (
                cempionatdata.map((elem) => (
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      marginTop: 20,
                      marginLeft: 20,
                    }}
                  >
                    <Text
                      style={{
                        color: "white",
                        textAlign: "center",
                        marginTop: 10,
                        marginBottom: 5,
                      }}
                    >
                      {elem.time}
                    </Text>

                    <Image
                      source={{
                        uri: elem.images,
                      }}
                      style={{
                        width: 60,
                        height: 60,
                        resizeMode: "contain",
                        borderRadius: 100,
                      }}
                    />
                    <Text style={{ color: "white", marginTop: 5 }}>
                      {elem.hesab}
                    </Text>
                    <Image
                      source={{ uri: elem.satatusImg }}
                      style={{ width: 20, height: 20, marginTop: 10 }}
                    />
                  </View>
                ))
              ) : (
                <View
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={{
                      uri: "https://icon-library.com/images/loading-icon-transparent-background/loading-icon-transparent-background-12.jpg",
                      width: 30,
                      height: 30,
                      resizeMode: "contain",
                    }}
                  />
                </View>
              )}
            </View>
            <Text style={{ color: "white", margin: 20 }}>Trophies</Text>
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
   
    </View>
  );
}
