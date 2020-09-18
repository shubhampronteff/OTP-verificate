import { Platform, View, StyleSheet, Dimensions, Text } from "react-native";
import React, { useState } from "react";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import * as Location from "expo-location";
import Constants from "expo-constants";

const ht = Dimensions.get("screen").height;
const wd = Dimensions.get("screen").width;

function Map() {
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [dir, setDir] = useState(false);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const See = () => {
    if (Platform.OS === "android" && !Constants.isDevice) {
      setErrorMsg(
        "Oops, this will not work on Sketch in an Android emulator. Try it on your device!"
      );
    } else {
      async () => {
        let { status } = await Location.requestPermissionsAsync();
        if (status !== "granted") {
          setErrorMsg("Permission to access location was denied");
        }

        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
      };
    }
  };
  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }
  const onRegionChange = (region) => {
    setRegion({ region });
  };
  console.log(region);
  return (
    <View style={{ positio: "absolute" }}>
      <MapView
        region={region}
        onRegionChange={onRegionChange}
        style={styles.map}
      >
        <Marker draggable coordinate={region} />
      </MapView>
      <View style={styles.location}>
        <TouchableOpacity onPress={See}>
          <MaterialIcons name="my-location" size={44} color="orange" />
        </TouchableOpacity>
      </View>
      <View style={styles.direction}>
        <TouchableOpacity onPress={() => setDir(true)}>
          <FontAwesome5 name="directions" size={44} color="orange" />
        </TouchableOpacity>
      </View>
      {dir ? (
        <View style={styles.directionView}>
          <TextInput style={styles.enterDirection} autoFocus={true} />

          <TouchableOpacity onPress={() => setDir(false)}>
            <FontAwesome5 name="search-location" size={30} color="orange" />
          </TouchableOpacity>
        </View>
      ) : null}
      <View style={{ position: "absolute", top: 100, left: 50 }}>
        <Text>{text}hello</Text>
      </View>
    </View>
  );
}

export default Map;

const styles = StyleSheet.create({
  map: {
    width: wd * 1,
    height: ht * 0.95,
  },
  location: {
    position: "absolute",
    bottom: ht * 0.13,
    right: wd * 0.04,
  },
  direction: {
    position: "absolute",
    bottom: ht * 0.06,
    right: wd * 0.04,
  },
  enterDirection: {
    borderWidth: wd * 0.002,
    borderColor: "black",
    width: wd * 0.6,
    height: ht * 0.05,
    borderRadius: wd * 0.01,
    marginRight: wd * 0.05,
    paddingLeft: wd * 0.03,
    color: "black",
  },
  directionView: {
    position: "absolute",
    top: ht * 0.22,
    left: wd * 0.02,
    backgroundColor: "white",
    width: wd * 0.8,
    height: ht * 0.08,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: wd * 0.03,
  },
});
