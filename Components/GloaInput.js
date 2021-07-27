/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native';

function GloaInput({ addGoalsHandalers }) {
   const [Goals, setGoals] = useState('');
   const handleGoalsFun = (value) => {
      setGoals(value);
   };
   return (
      <View style={styles.headerTop}>
         <TextInput
            onChangeText={handleGoalsFun}
            placeholder="Course Goals"
            value={Goals}
            style={styles.InputField} />
         <Pressable onPress={() => addGoalsHandalers(Goals)} style={styles.button}  >
            <Text style={styles.buttonText}>ADD</Text>
         </Pressable>
      </View>
   );
}

export default GloaInput;
const styles = StyleSheet.create({
   headerTop: {
      flexDirection: 'row',
      width: '100%',
   },
   InputField: {
      width: '70%',
      backgroundColor: '#f1f1f1',
      paddingLeft: 15,
      borderWidth: 1,
      borderColor: 'gray',
      borderTopLeftRadius: 10,
      borderBottomLeftRadius: 10,
   },
   button: {
      width: '30%',
      backgroundColor: 'green',
      textAlignVertical: 'center',
      borderBottomRightRadius: 10,
      borderTopRightRadius: 10,

   },
   buttonText: {
      textAlign: 'center',
      color: '#fff',
      textAlignVertical: 'center',
      paddingTop: 12,
      paddingBottom: 12,

   },
})
