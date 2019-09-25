import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GoalItem = props =>{
    return (
    <TouchableOpacity activeOpacity={0.8} onPress={props.onDelete.bind(this, props.id)}>
        <View style={styles.outputs}>
            <Text style={{fontSize: 20, color: 'black'}}>
                {props.title}
            </Text>
        </View>
    </TouchableOpacity>
    );
};

export default GoalItem;

//------------------------------------------------- STYLES ----------------------------------------------------//

const styles = StyleSheet.create({
    outputs: {
      padding: 10,
      backgroundColor: '#cccccc',
      borderColor: 'white',
      borderWidth: 1,
      borderRadius: 10,
      marginLeft: 25,
      marginRight: 25,
      marginTop: 10,
    }
  });
  