import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ExpenseItem from './ExpenseItem';

function renderExpenseItem(itemData) {
    const item=itemData.item
   
   return  <ExpenseItem {...item} />
}
const ExpensesList = ({expenses}) => {
  return (
   <FlatList  data={expenses} renderItem={renderExpenseItem}
   keyExtractor={(item)=>item.id}/>
  )
}

export default ExpensesList

const styles = StyleSheet.create({})