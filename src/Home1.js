import React, { useState } from "react";
import { Container, Item, Form, Input, Button, Label } from "native-base";
import { Text } from "react-native";
import * as firebase from "firebase";

var config = {
  apiKey: "AIzaSyDr6of06YOfmsxcQM_-i1pDct2iwRR5_Y4",
  authDomain: "otp-project-react.firebaseapp.com",
  databaseURL: "https://otp-project-react.firebaseio.com",
  projectId: "otp-project-react",
  storageBucket: "otp-project-react.appspot.com",
  messagingSenderId: "840708651795",
  appId: "1:840708651795:android:8e098873c2a0b3fd0c38e6",
  //   measurementId: "G-XXXXXXX",
};
firebase.initializeApp(config);

function Home({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const SignUp = (email, password) => {
    try {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((user) => {
          console.log(user);
        })
        .then(() => alert("sucessfully created..."));
    } catch (error) {
      console.log(error.toString(error));
    }
  };
  const Login = (email, password) => {
    try {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((res) => {
          console.log(res.user.email);
        })
        .then(() => {
          navigation.navigate("Success");
        });
    } catch (error) {
      console.log(error.toString(error));
    }
  };
  return (
    <Container style={{ width: 350, marginTop: 40 }}>
      <Form>
        <Item floatingLabel>
          <Label>Email</Label>
          <Input
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(text) => {
              setEmail(text);
            }}
          />
        </Item>
        <Item floatingLabel>
          <Label>Password</Label>
          <Input
            secureTextEntry={true}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(text) => {
              setPassword(text);
            }}
          />
        </Item>
        <Button
          full
          rounded
          success
          style={{ marginTop: 40 }}
          onPress={() => {
            Login(email, password);
          }}
        >
          <Text>Login</Text>
        </Button>
        <Button
          full
          rounded
          success
          style={{ marginTop: 20 }}
          onPress={() => {
            SignUp(email, password);
          }}
        >
          <Text>Signup</Text>
        </Button>
      </Form>
    </Container>
  );
}

export default Home;
