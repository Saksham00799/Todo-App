import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, TextInput } from 'react-native';

const GoalInput = props =>{
    
    const[enteredGoal, setEnteredGoal]=useState('');
    
    const goatInputHandler = (enteredText) => {
		setEnteredGoal(enteredText);
	};
    return (
        <View style={styles.addItem}>
        <TextInput
			placeholder="Enter Todo"
			style={styles.inputBar}
			onChangeText={goatInputHandler}
			value={enteredGoal}
			/>
        <Button
		title="ADD"
		onPress={props.onAddGoal.bind(this, enteredGoal)}
		color="#0066ff"
		/>
      </View>
    );
};

export default GoalInput;

//------------------------------------------------- STYLES ----------------------------------------------------//

const styles = StyleSheet.create({
    screen:{
        paddingTop: 40,
    },
    addItem: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      paddingLeft: 10,
      paddingRight:10
    },
    inputBar:{
      borderColor: '#0066ff',
      borderRadius: 10,
      borderWidth: 1,
      padding: 10,
      width: 300,
    },
  });
  