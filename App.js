// import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
// import Home from "./src/Home";
// import Home1 from "./src/Home1";
// import Success from "./src/Success";
import Map from "./src/Map";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <Map />
    </View>
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Home1">
    //     <Stack.Screen
    //       name="Home1"
    //       component={Home1}
    //       options={{ headerShown: false }}
    //     />
    //     <Stack.Screen name="Success" component={Success} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
