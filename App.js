/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, FlatList, Alert } from 'react-native';
import GloaInput from './Components/GloaInput';
import GoalList from './Components/GoalList';

function App() {

   const [CourseGoals, setCourseGoals] = useState([]);

   const addGoalsHandalers = (value) => {
      setCourseGoals([...CourseGoals, { key: Math.random().toString(), value: value }]);

      // setGoals('');
   };

   const removeGloatItem = (gloalId) => {
      setCourseGoals(currentGoals => {
         return currentGoals.filter(goals => goals.key !== gloalId);
      });
      Alert.alert('One Gaol Has been deleted');
   };
   return (

      <View style={styles.container}>


         <GloaInput addGoalsHandalers={addGoalsHandalers} />


         <View style={{ marginRight: 10, marginTop: 15 }} >

            <FlatList data={CourseGoals}
               renderItem={itemdData =>
                  <GoalList
                     onDelete={removeGloatItem}
                     itemdData={itemdData}
                     CourseGoals={CourseGoals}
                  />
               } />
         </View >


      </View>

   );
}

export default App;


const styles = StyleSheet.create({
   mapStyle: {
      margin: 5,
      padding: 10,
      backgroundColor: '#68788C',
      color: '#fff',
      flexDirection: 'row',
      width: '100%',
      borderRadius: 6,


   },
   container: {
      padding: 20,
   },

});
