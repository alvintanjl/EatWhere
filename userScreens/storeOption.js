import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  Button,
  Alert,
  Keyboard,
  TouchableWithoutFeedback,
  Image,
  TouchableOpacity,
} from "react-native";
import firebase from "../database/Firebase";
import FlatButton from "../shared/button";

export default function StoreOption({ route, navigation }) {
  return (
    <View style={styles.container}>
      <Text>Eating options</Text>
      <FlatList
        data={route.param.store1}
        renderItem={({ item }) => (
          <FlatButton
            styleInput={buttonStyle}
            text={
              item.storeName +
              " Average wait time: " +
              item.storeWaitTime +
              "minutes"
            }
            onPress={() => navigation.navigate("FoodDetails", item)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 50,
    backgroundColor: "#fff",
  },
});

const buttonStyle = StyleSheet.create({
  button: {
    borderRadius: 8,
    marginVertical: 10,
    paddingVertical: 30,
    paddingHorizontal: 10,
    backgroundColor: "#f01d71",
  },
  buttonText: {
    color: "white",
    textTransform: "uppercase",
    fontSize: 16,
    textAlign: "center",
  },
});
