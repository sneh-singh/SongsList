import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { screenNames } from './screen-names';
import { AuthNavigator } from './auth';

const RootStack = createStackNavigator();

const NavigationContainerRoot = () => {

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <NavigationContainer>
                <RootStack.Navigator headerMode="none">
                    <RootStack.Screen name={screenNames.stack.Auth} component={AuthNavigator} />
                </RootStack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    );
};

export default NavigationContainerRoot;
