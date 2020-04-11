import React from "react";
import { Text, View, StyleSheet, FlatList, Button } from "react-native";
import ImageCard from "../components/ImageCard";


const ImageScreen = ({ navigation }) => {
  const landscapes = [
    {
      name: "beach"
    },
    {
      name: "forest"
    },
    {
      name: "mountain"
    }
  ];
  return (
    <View>
      <FlatList
        keyExtractor={friend => friend.name}
        data={landscapes}
        renderItem={({ item }) => {
          return (
            <ImageCard
              imagePath={`../../../assets/${item.name}.jpg`}
              name={item.name}
            />
          );
        }}
      />
      <Button title="Go HomePage" onPress={() => navigation.navigate("Home")}/>
    </View>
  );
};


const styles = StyleSheet.create({

}) 

export default ImageScreen