import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

import React from "react";
import { Link } from "react-router-native";


export default function Tabs() {
  return (
    <View>
      <View
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: "row",
          marginTop: 20,
          padding: 10,
          borderBottomWidth: 1,
          borderBottomColor: "black",
        }}
      >
        <Text style={{ backgroundColor: "gray", padding: 5 }}>Content</Text>
        <Text style={{ backgroundColor: "gray", padding: 5 }}>Statistics</Text>
        <Text style={{ backgroundColor: "gray", padding: 5 }}>Lineups</Text>
        <Text
          style={{ backgroundColor: "darkblue", padding: 5, color: "white" }}
        >
          Comments
        </Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <Image
          style={{
            width: 90,
            height: 90,
            borderRadius: 100,
            resizeMode: "cover",
            margin: 10,
          }}
          source={{
            uri: "https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=416",
          }}
        />
        <View style={{ padding: 5 }}>
          <View
            style={{
              display: "flex",
              justifyContent: "flex-start",
              flexDirection: "row",
            }}
          >
            <Text>Abbas Aliyev</Text>
            <Text>● now</Text>
          </View>

          <View style={{ marginTop: 5 }}>
            <Text style={{ width: 250 }}>
              I hope the second half goes as I expected
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <Image
          style={{
            width: 90,
            height: 90,
            borderRadius: 100,
            resizeMode: "cover",
            margin: 10,
          }}
          source={{
            uri: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
          }}
        />
        <View style={{ padding: 5 }}>
          <View
            style={{
              display: "flex",
              justifyContent: "flex-start",
              flexDirection: "row",
            }}
          >
            <Text>Ramin Akberli</Text>
            <Text>● 3 minutes ago</Text>
          </View>

          <View style={{ marginTop: 5 }}>
            <Text style={{ width: 250 }}>I wish luck to both clubs</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <Image
          style={{
            width: 30,
            height: 30,
            borderRadius: 100,
            resizeMode: "cover",
            margin: 10,
          }}
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzPb_pSj-ir-9eB6mi0lVJdQP1KKHiB8fRBS1CbmOXGd9Z1FEGMJHbEKhahwhWLGSaEXY&usqp=CAU",
          }}
        />
        <TextInput
          style={{
            borderRadius: 5,
            borderColor: "black",
            borderWidth: 1,
            padding: 10,
            width: "85%",
            marginBottom: 10,
          }}
          underlineColorAndroid="transparent"
          placeholder="Add a comment..."
          placeholderTextColor="#16283e"
          autoCapitalize="none"
        />
      </View>

      <TouchableOpacity style={styles.submitButton}>
        <Link to="/">
          <Text style={styles.submitButtonText}>HOME</Text>
        </Link>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  submitButton: {
    backgroundColor: "#16283e",
    padding: 10,
    margin: 15,
    height: 40,
    textAlign: "center",
    borderRadius: 8,
  },
  submitButtonText: {
    color: "white",
    textAlign: "center",
  },
});
