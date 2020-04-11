import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput, Button } from "react-native";


const TextScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  return (
    <View>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        value={name}
        onChangeText={(value) => setName(value)}
      />
      <Text>{name.length > 5 ? null : "Password is too short"}</Text>
      <Button
        title="Go To The Home Page"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
  },
});

export default TextScreen;
