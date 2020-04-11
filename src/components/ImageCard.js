import React from "react";
import { Text, StyleSheet, View, Button, Image } from "react-native";

const ImageCard = ({name, imagePath}) => {

   const avatarImage = () => {
    switch (name) {
      case "beach":
       return require('../../assets/beach.jpg');
      case "forest":
        return require('../../assets/forest.jpg');
      case "mountain":
        return require('../../assets/mountain.jpg');
    }
  }

  return (
    <View>
      <Text style={styles.textStyle}>{name}</Text>
      <Image source={avatarImage()} />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30
  }
});

export default ImageCard;
