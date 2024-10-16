import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ListPage from './pages/ListPage';
import DetailPage from './pages/DetailPage';
import ProfilePage from './pages/ProfilePage';
import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="List" 
          component={ListPage} 
          options={({ navigation }) => ({
            title: 'Data List',
            headerRight: () => (
              <Ionicons 
                name="person-circle-outline" 
                size={30} 
                color="black" 
                style={{ marginRight: 10 }} 
                onPress={() => navigation.navigate('Profile')}
              />
            ),
          })} 
        />
        <Stack.Screen 
          name="Detail" 
          component={DetailPage} 
          options={{ title: 'Data Detail' }} 
        />
        <Stack.Screen 
          name="Profile" 
          component={ProfilePage} 
          options={{ title: 'My Profile' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

