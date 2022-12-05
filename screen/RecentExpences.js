import React from 'react'
import { StyleSheet } from 'react-native'
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput'

const RecentExpences = () => {
  return (
    <ExpensesOutput expensesPeriod="Last 7 days" />
  )
}

export default RecentExpences

const styles = StyleSheet.create({})