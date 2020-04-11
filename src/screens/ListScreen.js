import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const ListScreen = () => {
  const friends = [
    { name: "Mikes" },
    { name: "Tommm" },
    { name: "Mike1" },
    { name: "Mike2" },
    { name: "Mike3" },
    { name: "Mike5" },
    { name: "Mike6" },
    { name: "Mike7" },
    { name: "Mike8" },
    { name: "Mike9" },
    { name: "Mike10" },
    { name: "Mike611" },
    { name: "Mike72" }
  ];
  return (
    <View>
      <FlatList
        keyExtractor={friend => friend.name}
        data={friends}
        renderItem={({ item }) => {
          return <Text style={styles.textStyle}>{item.name}</Text>;
        }}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50
  }
});

export default ListScreen;
