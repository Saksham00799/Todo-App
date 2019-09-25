import React, {useState} from 'react';
import { StyleSheet, Text, View, Button,TextInput , ScrollView, FlatList} from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
	// const[enteredGoal, setEnteredGoal]=useState('');
	const[courseGoals, setCourseGoals]= useState([]);

	// const goatInputHandler = (enteredText) => {
	// 	setEnteredGoal(enteredText);
	// };
	const addGoalHandler = goalTitle => {
		setCourseGoals(courseGoals =>
		[
			...courseGoals, 
			{id: Math.random().toString(), value: goalTitle}
		]);
	};

	const removeGoalHandler = goalId => {
		setCourseGoals (currentGoals => {
			return currentGoals.filter((goal)=> goal.id !== goalId);
		});
	}
  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal = {addGoalHandler} />
	  <FlatList
	  keyExtractor={(item, index) => item.id}
	  data={courseGoals}
	  renderItem = {itemData => (
	  <GoalItem 
		id = {itemData.item.id}
		onDelete={removeGoalHandler}
		title={itemData.item.value}
		/>
  		)}
	/>
	</View>
  );
}

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
  outputs: {
	padding: 10,
	backgroundColor: '#f2f2f2',
	borderColor: 'white',
	borderWidth: 1,
	borderRadius: 10,
	marginLeft: 50,
	marginRight: 50,
	marginTop: 10,
  }
});
