import React, { useState } from "react";
import { Text, StyleSheet, View, Button, FlatList } from "react-native";

const ColorGenerator = ({ navigation }) => {
  const [colors, setColors] = useState([])

  const randomInteger = () => Math.floor(Math.random()* 255)
  const generateColor = () => {
    const color = `rgb(${randomInteger()},${randomInteger()},${randomInteger()})`; 
    setColors([...colors, color]);
    console.log(colors)
  }


  return (
    <View>
      <Text>Color Generator</Text>
      <Button title="Pick A Color" onPress={generateColor} />
      <View style={styles.container}>
        <FlatList
          numColumns={5}
          keyExtractor={color => color}
          data={colors}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  ...styles.colorBox,
                  backgroundColor: item
                }}
              ></View>
            );
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  colorBox: {
    width: '20%',
    height: 50
  },
  container: {
  }
});

export default ColorGenerator;
