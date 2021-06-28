import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from '../../node_modules/react-native-vector-icons/dist/Ionicons';
import List from '../screens/list';
import Home from '../screens/home';
import Detail from '../screens/list/detail';

const AuthStack = createStackNavigator();
const Tab = createBottomTabNavigator();

export const SettingsStackScreen = () => {
    return (
        <AuthStack.Navigator>
          <AuthStack.Screen name="List" component={List} />
          <AuthStack.Screen name="Detail" component={Detail} />
        </AuthStack.Navigator>
      );
}
export const AuthNavigator = () => {
    return (
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Home') {
                            iconName = focused
                                ? 'home-outline'
                                : 'home';
                        } else if (route.name === 'List') {
                            iconName = focused ? 'list-outline' : 'list';
                        }

                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: 'green',
                    inactiveTintColor: 'grey',
                }}
            >
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="List" component={SettingsStackScreen} />
            </Tab.Navigator>
    );
};
