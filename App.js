import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { GlobalStyles } from './constrains/style';
import AllExpenses from './screen/AllExpenses';
import ManageExpenses from './screen/ManageExpenses';
import RecentExpences from './screen/RecentExpences';

const Stack = createNativeStackNavigator();

const BottomTabs = createBottomTabNavigator();
function ExpensesOverView() {
  return <BottomTabs.Navigator screenOptions={{
    headerStyle:{backgroundColor:GlobalStyles.colors.primary500},
    headerTintColor:'white',
    tabBarStyle:{
      backgroundColor:GlobalStyles.colors.primary500
    },
    tabBarActiveTintColor:GlobalStyles.colors.accent500
  }}>

    <BottomTabs.Screen  name="RecentExpenses" component={RecentExpences} options={{
      title :'Recent Expense',
      tabBarLabel:'Recent',
      tabBarIcon:({color,size})=>{
       return <Ionicons name="hourglass" size={size} color={color} /> 
      }

    }}/>
    <BottomTabs.Screen  name="AllExpenses" component={AllExpenses} options={{
      title :'All Expense',
      tabBarLabel:'All',
      tabBarIcon:({color,size})=>{
       return <Ionicons name="calendar" size={size} color={color} /> 
      }

    }}/>
  </BottomTabs.Navigator>
}
export default function App() {
  return (
    <>
    <StatusBar style="auto" />
   <NavigationContainer>
    <Stack.Navigator>
  <Stack.Screen  name="ExpensesOverview" component={ExpensesOverView} options={{
    headerShown:false
  }}/>
      <Stack.Screen  name="ManageExpense" component={ManageExpenses}/>
      
      </Stack.Navigator>
   </NavigationContainer>
   </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
