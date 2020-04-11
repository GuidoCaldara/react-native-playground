import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const ComponentScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.textStyle}>WooW</Text>
      <Button title="Go back" onPress={()=> navigation.navigate("Home")}/>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30
  }
});

export default ComponentScreen;
