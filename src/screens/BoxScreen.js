import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput, Button } from "react-native";

const BoxScreen = ({ navigation }) => {
  return (
    <View>
      <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>1 element</Text>
        <Text style={styles.textStyle}>2 element</Text>
        <Text style={styles.textStyle}>3 element</Text>
      </View>
      <Button
        title="Go To the Home"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: 'gray',
    justifyContent: 'center',
    flexDirection: 'column',
    height: '100%'
  },
  textStyle:{
    padding: 10,
    borderWidth: 3,
    borderColor: 'red'
  }
});

export default BoxScreen;
