import React, { useReducer } from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const reducer = (state, action) =>{
    switch(action.type){
      case 'change_counter':
        return({counter: state.counter + action.payload })
    }
}

const Counter = ({ navigation }) => {
  const [state, dispatch] = useReducer(reducer, {counter: 0});
  console.log(state)
  const { counter } = state

  return (
    <View>
      <Button
        title="Increment"
        onPress={() => {
          dispatch({type: 'change_counter', payload: +1})
        }}
      />
      <Button
        title="Decrement"
        onPress={() => {
          dispatch({type: 'change_counter', payload: -1})
        }}
      />
      <Text>Current Count: {counter}</Text>
      <Button
        title="Go Back Home"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
};

export default Counter;
