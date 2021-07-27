/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, FlatList } from 'react-native';


function GoalList({ CourseGoals, itemdData, onDelete }) {
   return (
      <TouchableOpacity onPress={() => onDelete(itemdData.item.key)}>
         <View style={styles.mapStyle}>
            <Text style={{ color: '#fff' }}>
               {itemdData.item.value}

            </Text>
         </View>
      </TouchableOpacity>

   );
}

export default GoalList;

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
      paddingTop: 16,
      paddingBottom: 12,

   },
});
