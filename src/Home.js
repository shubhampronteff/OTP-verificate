import React, { useState, useRef } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  Dimensions,
} from "react-native";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import firebase from "../firebase";

const ht = Dimensions.get("screen").height;
const wd = Dimensions.get("screen").width;

function Home({ navigation }) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [code, setCode] = useState("");
  const [verificationId, setVerificationId] = useState(null);
  const recaptchaVerifier = useRef(null);

  const sendVerification = () => {
    const phoneProvider = new firebase.auth.PhoneAuthProvider();
    phoneProvider
      .verifyPhoneNumber(phoneNumber, recaptchaVerifier.current)
      .then(setVerificationId);
  };

  const confirmCode = () => {
    const credential = firebase.auth.PhoneAuthProvider.credential(
      verificationId,
      code
    );
    firebase
      .auth()
      .signInWithCredential(credential)
      .then((result) => {
        // Do something with the results here
        alert("Successfully Login...");
        // console.log(result);
        navigation.navigate("Success");
      });
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.main}>Registration</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.heading}>Enter Phone Number</Text>
        <TextInput
          placeholder="Phone Number"
          onChangeText={setPhoneNumber}
          keyboardType="phone-pad"
          autoCompleteType="tel"
          style={styles.input}
        />
        <TouchableOpacity
          onPress={() => {
            if (phoneNumber == "") {
              alert("Phone Number field Can't be empty...");
            } else {
              sendVerification();
            }
          }}
          style={styles.button}
        >
          <Text style={styles.text}>Send Verification</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <Text style={styles.heading}>Enter Verification Code</Text>
        <TextInput
          placeholder="Confirmation Code"
          onChangeText={setCode}
          keyboardType="number-pad"
          style={styles.input}
        />
        <TouchableOpacity
          onPress={() => {
            if (phoneNumber == "") {
              alert("Enter Phone number First...");
            } else if (code == "") {
              alert("OTP Field is Empty...");
            } else {
              confirmCode();
            }
          }}
          style={styles.button}
        >
          <Text style={styles.text}>Send Verification</Text>
        </TouchableOpacity>
      </View>
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={firebase.app().options}
      />
    </View>
  );
}

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: 50,
    backgroundColor: "#121735",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderWidth: wd * 0.001,
    borderRadius: ht * 0.01,
    width: wd * 0.7,
    paddingLeft: wd * 0.03,
    height: ht * 0.05,
    marginTop: ht * 0.01,
    borderColor: "white",
    color: "white",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "pink",
    borderRadius: ht * 0.02,
    width: wd * 0.6,
    height: ht * 0.05,
    marginTop: ht * 0.01,
  },
  text: {
    color: "white",
    textAlign: "center",
    marginTop: ht * 0.007,
    fontWeight: "bold",
    fontSize: ht * 0.025,
  },
  section: {
    alignItems: "center",
    marginBottom: ht * 0.05,
  },
  heading: {
    fontWeight: "bold",
    fontSize: ht * 0.025,
    color: "white",
  },
  main: {
    fontWeight: "bold",
    fontSize: ht * 0.05,
    color: "white",
    marginBottom: ht * 0.06,
  },
});
