import React from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";

const ht = Dimensions.get("screen").height;
const wd = Dimensions.get("screen").width;

function Success() {
  return (
    <View style={styles.container}>
      <Text style={{ marginTop: ht * 0.9 }}>YOU ARE IN THE Application...</Text>
    </View>
  );
}

export default Success;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
