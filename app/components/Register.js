import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from "react-native";
import { CheckBox } from "react-native-elements";
import { Link } from "react-router-native";
import TabMenuBottom from "./TabMenuRegister";


class Inputs extends Component {
  state = {
    email: "",
    password: "",
  };
  handleEmail = (text) => {
    this.setState({ email: text });
  };
  handlePassword = (text) => {
    this.setState({ password: text });
  };
  login = (email, pass) => {};
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground 
          source={require("../assets/bgimages.jpeg")}
          style={styles.bgImg}
        >
          <ScrollView >
            <Text
              style={{
                fontSize: 30,
                textAlign: "center",
                marginTop: 20,
                padding: 10,
                fontWeight: "bold",
              }}
            >
              Sign up
            </Text>
            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder="FULLNAME"
              placeholderTextColor="#16283e"
              autoCapitalize="none"
              onChangeText={this.handleEmail}
            />

            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder="PASSPORT ID"
              placeholderTextColor="#16283e"
              autoCapitalize="none"
              onChangeText={this.handlePassword}
            />
            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder="BANK ACCOUNT ID"
              placeholderTextColor="#16283e"
              autoCapitalize="none"
              onChangeText={this.handlePassword}
            />
            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder="EMAIL"
              placeholderTextColor="#16283e"
              autoCapitalize="none"
              onChangeText={this.handlePassword}
            />
            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder="BIRTH DAY"
              placeholderTextColor="#16283e"
              autoCapitalize="none"
              onChangeText={this.handlePassword}
            />
            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder="MOBILE NUMBER"
              placeholderTextColor="#16283e"
              autoCapitalize="none"
              onChangeText={this.handlePassword}
            />
            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder="PASSWORD"
              placeholderTextColor="#16283e"
              autoCapitalize="none"
              onChangeText={this.handlePassword}
            />
            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder="CONFIRM PASSWORD"
              placeholderTextColor="#16283e"
              autoCapitalize="none"
              onChangeText={this.handlePassword}
            />
            <CheckBox
              style={styles.CheckBox}
              title="I competely agree to the Privacy Policy, Terms and Conditions."
              checked={this.state.checked}
            />
            <CheckBox
              style={styles.CheckBox}
              title="Stay informed of promotions and updates"
              checked={this.state.checked}
            />

            <Link to="/feed">
              <View style={styles.submitButton}>
                <Text style={styles.submitButtonText}>Sign in</Text>
              </View>
            </Link>
        
          {/* <TabMenuBottom/> */}
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}
export default Inputs;

const styles = StyleSheet.create({
  container: {
    paddingTop: 23,
    height: "100%"
  },
  input: {
    margin: 8,
    marginRight: 20,
    marginLeft: 20,
    height: 40,
    borderColor: "#16283e",
    borderWidth: 1,
    padding: 12,
    borderRadius: 8,
    color: "#000",
  },
  submitButton: {
    backgroundColor: "#16283e",
    padding: 0,
    margin: 5,
    height: 45,
    textAlign: "center",
    borderRadius: 8,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  submitButtonText: {
    color: "white",
    textAlign: "center",
  },
  CheckBox: {
    fontSize: 14,
  },
});
