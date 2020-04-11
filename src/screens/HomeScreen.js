import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
import ComponentScreen from "./ComponentScreen";
const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text>Welcome to my App</Text>
      <Button
        onPress={() => navigation.navigate("Components")}
        title="Go To Components Demo"
      />
      <Button
        title="Go To The List Page"
        onPress={() => navigation.navigate("List")}
      />
      <Button
        title="Go To The Cards Page"
        onPress={() => navigation.navigate("Images")}
      />
      <Button
        title="Go To The Counter"
        onPress={() => navigation.navigate("Counter")}
      />
      <Button
        title="Go To The ColorGenerator"
        onPress={() => navigation.navigate("ColorGenerator")}
      />
      <Button
        title="Go To The ColorPicker"
        onPress={() => navigation.navigate("ColorPicker")}
      />
      <Button
        title="Go To The Text Screen"
        onPress={() => navigation.navigate("TextScreen")}
      />
      <Button
        title="Go To The Box Screen"
        onPress={() => navigation.navigate("BoxScreen")}
      />
    </View>
  );
};



export default HomeScreen;

      // <TouchableOpacity onPress={() => navigation.navigate("List")}>
      //   <Text>Go to list demo</Text>
      // </TouchableOpacity>;
