import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TextInput,
} from "react-native";
import React from "react";
import { Entypo, AntDesign, EvilIcons } from "@expo/vector-icons";
import { Link } from "react-router-native";
import TabMenuBottom from "./TabMenuBottomProfile";


const feed = [
  {
    id:1,
    name: "Neymar _Jr",
    time: "12 min ago",
    like: 1344,
    comment: 4559,
    profileImg:
      "https://static.onecms.io/wp-content/uploads/sites/20/2021/05/28/Neymar84.jpg",
    postImg: "https://i.insider.com/5d0019836fc92043771f7522?width=700",
  },
];

export default function Feed() {
  return (
    <View style={{ marginTop: 40 }}>
      <View
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          width: "96%",
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
        <View>
          <Text
            style={{ textAlign: "center", fontSize: 30, fontWeight: "bold" }}
          >
            Feed
          </Text>
        </View>
      </View>
      <TextInput
        style={{
          paddingLeft: 20,
          marginBottom: 10,
          marginTop: 20,
          borderRadius: 8,
          marginLeft: 10,
          borderWidth: 1,
          width: "94%",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          padding: 10,
        }}
        placeholder="Add Status"
      ></TextInput>
      <ScrollView  horizontal={false} style={{maxHeight:600}}>
        <View style={{ marginBottom: 100 }}>
        
            <View style={styles.FeedHead}>
              <View style={styles.ProfileCard}>
                <Link to="/playprofile">
                  <View style={styles.Flex}>
                    <Image
                      style={styles.ProfileImg}
                      source={{
                        uri: "https://static.onecms.io/wp-content/uploads/sites/20/2021/05/28/Neymar84.jpg",
                      }}
                    />
                    <View style={{ marginLeft: 20 }}>
                      <Text>Neymar _Jr</Text>
                      <Text>12 minutes ago</Text>
                    </View>
                  </View>
                </Link>
                <View>
                  <Entypo name="dots-three-vertical" size={24} color="black" />
                </View>
              </View>
              <View
                style={{
                  width: "90%",
                  marginLeft: 10,
                  marginTop: 20,
                  marginRight: 0,
                }}
              >
                <Image
                  style={{
                    width: "100%",
                    height: 250,
                    borderRadius: 10,
                    resizeMode: "cover",
                  }}
                  source={{
                    uri: "https://i.insider.com/5d0019836fc92043771f7522?width=700",
                  }}
                />
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <View style={styles.RiwewComLike}>
                  <View style={styles.icon}>
                    <AntDesign name="like2" size={20} color="black" />
                    <Text>134</Text>
                  </View>
                  <View style={styles.icon}>
                    <EvilIcons name="comment" size={20} color="black" />
                    <Text>455</Text>
                  </View>
                </View>

                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    marginRight: 40,
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-end",
                      marginRight: 10,
                      marginTop: 10,
                    }}
                  >
                    <Link style={{ backgroundColor: "white" }} to="/realgame">
                      <Image
                        source={{
                          uri: "http://assets.stickpng.com/images/5900cafc16ae4b3fc58f4833.png",
                        }}
                        style={{
                          width: 150,
                          height: 40,
                          resizeMode: "contain",
                        }}
                      />
                    </Link>
                  </View>

                  <View style={{}}>
                    <Entypo name="eye" size={15} color="black" />
                    <Text>238</Text>
                  </View>
                </View>
              </View>
            </View>
     
          <View style={styles.FeedHead}>
            <View style={styles.ProfileCard}>
              <View style={styles.Flex}>
                <Link to="/clubscreen">
                  <Image
                    style={styles.ProfileImg}
                    source={{
                      uri: "https://p4.wallpaperbetter.com/wallpaper/572/24/997/azerbaijan-qaraba%C4%9F-fk-soccer-clubs-turkish-wallpaper-preview.jpg",
                    }}
                  />
                </Link>
                <View style={{ marginLeft: 20 }}>
                  <Text>Qarabag FK</Text>
                  <Text>20 min ago</Text>
                </View>
              </View>

              <View>
                <Entypo name="dots-three-vertical" size={24} color="black" />
              </View>
            </View>
            <View
              style={{
                width: "90%",
                marginLeft: 10,
                marginTop: 20,
                marginRight: 0,
              }}
            >
              <Image
                style={{
                  width: "100%",
                  height: 250,
                  borderRadius: 10,
                  resizeMode: "cover",
                }}
                source={{
                  uri: "https://qarabagh.com/uploads/catalog/elan.jpg",
                }}
              />
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View style={styles.RiwewComLike}>
                <View style={styles.icon}>
                  <AntDesign name="like2" size={20} color="black" />
                  <Text>201</Text>
                </View>
                <View style={styles.icon}>
                  <EvilIcons name="comment" size={20} color="black" />
                  <Text>125</Text>
                </View>
              </View>

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  marginRight: 40,
                }}
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    marginRight: 10,
                    marginTop: 10,
                  }}
                >
                  <Link style={{ backgroundColor: "white" }} to="/realgame">
                    <Image
                      source={{
                        uri: "http://assets.stickpng.com/images/5900cafc16ae4b3fc58f4833.png",
                      }}
                      style={{
                        width: 150,
                        height: 40,
                        resizeMode: "contain",
                      }}
                    />
                  </Link>
                </View>

                <View style={{}}>
                  <Entypo name="eye" size={15} color="black" />
                  <Text>238</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.FeedHead}>
            <View style={styles.ProfileCard}>
              <View style={styles.Flex}>
                <Link to="/managerProfile">
                  <Image
                    style={styles.ProfileImg}
                    source={{
                      uri: "https://img2.thejournal.ie/article/4899850/river?version=4899993&width=1340",
                    }}
                  />
                </Link>
                <View style={{ marginLeft: 20 }}>
                  <Text> Spectator</Text>
                  <Text>20 min ago</Text>
                </View>
              </View>

              <View>
                <Entypo name="dots-three-vertical" size={24} color="black" />
              </View>
            </View>
            <View
              style={{
                width: "90%",
                marginLeft: 10,
                marginTop: 20,
                marginRight: 0,
              }}
            >
              <Image
                style={{
                  width: "100%",
                  height: 250,
                  borderRadius: 10,
                  resizeMode: "cover",
                }}
                source={{
                  uri: "https://img2.thejournal.ie/inline/4687781/original/?width=630&version=4687781",
                }}
              />
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View style={styles.RiwewComLike}>
                <View style={styles.icon}>
                  <AntDesign name="like2" size={20} color="black" />
                  <Text>201</Text>
                </View>
                <View style={styles.icon}>
                  <EvilIcons name="comment" size={20} color="black" />
                  <Text>125</Text>
                </View>
              </View>

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  marginRight: 40,
                }}
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    marginRight: 10,
                    marginTop: 10,
                  }}
                >
                  <Link style={{ backgroundColor: "white" }} to="/realgame">
                    <Image
                      source={{
                        uri: "http://assets.stickpng.com/images/5900cafc16ae4b3fc58f4833.png",
                      }}
                      style={{
                        width: 150,
                        height: 40,
                        resizeMode: "contain",
                      }}
                    />
                  </Link>
                </View>

                <View style={{}}>
                  <Entypo name="eye" size={15} color="black" />
                  <Text>238</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.FeedHead}>
            <View style={styles.ProfileCard}>
              <View style={styles.Flex}>
                <Image
                  style={styles.ProfileImg}
                  source={{
                    uri: "https://i.guim.co.uk/img/media/0efe339f1ea4ff9977dc3b462bdea55c6eae129c/0_48_2434_1460/master/2434.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=c1b8af3cf48570a15789f8c9303f2272",
                  }}
                />
                <View style={{ marginLeft: 20 }}>
                  <Text> Scoulting</Text>
                  <Text>20 min ago</Text>
                </View>
              </View>

              <View>
                <Entypo name="dots-three-vertical" size={24} color="black" />
              </View>
            </View>
            <View
              style={{
                width: "90%",
                marginLeft: 10,
                marginTop: 20,
                marginRight: 0,
              }}
            >
              <Image
                style={{
                  width: "100%",
                  height: 250,
                  borderRadius: 10,
                  resizeMode: "cover",
                }}
                source={{
                  uri: "https://i.inews.co.uk/content/uploads/2019/01/GettyImages-97896903-640x360.jpg",
                }}
              />
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View style={styles.RiwewComLike}>
                <View style={styles.icon}>
                  <AntDesign name="like2" size={20} color="black" />
                  <Text>201</Text>
                </View>
                <View style={styles.icon}>
                  <EvilIcons name="comment" size={20} color="black" />
                  <Text>125</Text>
                </View>
              </View>

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  marginRight: 40,
                }}
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    marginRight: 10,
                    marginTop: 10,
                  }}
                >
                  <Link style={{ backgroundColor: "white" }} to="/realgame">
                    <Image
                      source={{
                        uri: "http://assets.stickpng.com/images/5900cafc16ae4b3fc58f4833.png",
                      }}
                      style={{
                        width: 150,
                        height: 40,
                        resizeMode: "contain",
                      }}
                    />
                  </Link>
                </View>

                <View style={{}}>
                  <Entypo name="eye" size={15} color="black" />
                  <Text>238</Text>
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

const styles = StyleSheet.create({
  FeedHead: {
    marginTop: 20,
    resizeMode: "cover",
    borderRadius: 10,
    elevation: 5,
    borderColor: "white",
    backgroundColor: "white",
    paddingBottom: 20,
    width: "97%",
    marginLeft: 5,
    paddingTop: 10,
  },
  ProfileCard: {
    width: "95%",
    marginLeft: 7,
    marginRight: 7,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  ProfileImg: {
    width: 70,
    height: 70,
    borderRadius: 10,
    resizeMode: "contain",
  },
  icon: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
  },
  Flex: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  RiwewComLike: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 10,
    marginLeft: 15,
  },
});
