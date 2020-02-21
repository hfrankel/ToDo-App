import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import EditTaskScreen from './screens/EditTaskScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#483d8b'
          },
          headerTintColor: '#ffffff',
          headerTitleStyle: {
            fontSize: 20
          }
        }}
      >
        <Stack.Screen name="To Do List" component={HomeScreen} />
        <Stack.Screen name="Edit" component={EditTaskScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
