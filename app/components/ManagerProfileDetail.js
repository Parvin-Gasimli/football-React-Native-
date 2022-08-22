import { View, Text, Image } from "react-native";
import React from "react";
import { Link } from "react-router-native";
import {

  AntDesign,

} from "@expo/vector-icons";

export default function ManagerProfileDetail() {
  return (
    <View>
      <View>
        <View
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            width: "96%",
            paddingTop: 30,
            paddingBottom: 10,
          }}
        >
          <Link to="/managerProfile">
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
              Manager Detail
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{ backgroundColor: "#242761", width: "100%", height: "100%" }}
      >
        <View
          style={{
            padding: 20,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View>
            <Image
              style={{
                width: 109,
                height: 109,
                borderRadius: 100,
                resizeMode: "cover",
              }}
              source={{
                uri: "https://img2.thejournal.ie/article/4899850/river?version=4899993&width=1340",
              }}
            />
          </View>

          <View style={{ marginLeft: 30 }}>
            <Text style={{ color: "white", fontSize: 24, fontWeight: "500" }}>
              Receb Veliyev
            </Text>
            <Text
              style={{
                color: "white",
                marginTop: 10,
                fontSize: 18,
                fontWeight: "400",
              }}
            >
              Manager
            </Text>
            <Text
              style={{
                color: "white",
                marginTop: 10,
                fontSize: 13,
                fontWeight: "300",
              }}
            >
              Baku, Azerbaijan
            </Text>

            <View
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "center",
              borderWidth: 1,
              borderColor: "#242761",
              width: 140,
              backgroundColor: "#FFA800",
              borderRadius: 25,
              marginTop:20,
              
              
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
                
              }}
            >
              Spectator
            </Text>
          </View>
          </View>
        </View>
        <Text
          style={{
            padding: 10,
            color: "white",
            fontSize: 16,
            fontWeight: "500",
          }}
        >
          Manager Detail
        </Text>

        <View style={{ backgroundColor: "#02023e",padding:20,marginTop:10,width:"98%",marginLeft:4,borderRadius:10 }}>
          
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
              paddingBottom:10
            }}
          >
            <Text style={{color:'white',fontSize:14}}>29 Years</Text>
            <Text style={{color:'white',fontSize:14}}>77 kq</Text>
            <Text style={{color:'white',fontSize:14}}>Preferred foot/Left</Text>
          </View>
       
          <View
            style={{
              paddingTop: 10,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
              paddingBottom:10
            }}
          >
            <Text style={{color:'white',fontSize:14}}>4/11/1993</Text>
            <Text style={{color:'white',fontSize:14}}>183 cm</Text>
            <Text style={{color:'white',fontSize:14}}>Jarsery Number/18</Text>
          </View>
          <View
            style={{
              paddingTop: 10,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <Text style={{color:'white',fontSize:14}}>England</Text>
            <Text style={{color:'white',fontSize:14}}>Virjinia ST</Text>
            <Text style={{color:'white',fontSize:14}}>Vatterdam Street</Text>
          </View>
        </View>
        <Text  style={{
            padding: 10,
            color: "white",
            fontSize: 16,
            fontWeight: "500",
          }}>Favorite Club</Text>
           <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  marginTop: 20,
                }}
              >
                <View>
                  <Image
                    source={{
                      uri: "data:image/png;base64,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",
                    }}
                    style={{
                      width: 100,
                      height: 100,
                      borderRadius:50,
                      resizeMode: "contain",
                    }}
                  />
                </View>
                <View>
                  <Image
                    source={{
                      uri: "https://w7.pngwing.com/pngs/373/629/png-transparent-antalyaspor-super-lig-as-monaco-fc-france-ligue-1-logo-football-emblem-text-trademark.png",
                    }}
                    style={{
                      width: 100,
                      height: 100,
                      borderRadius:50,
                      resizeMode: "contain",
                    }}
                  />
                </View>
                <View>
                  <Image
                    source={{
                      uri: "https://upload.wikimedia.org/wikipedia/tr/2/23/Maccabi_Haifa_FC_logo.png",
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
  );
}
