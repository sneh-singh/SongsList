import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContext } from '@react-navigation/native';
import Ionicons from '../../../node_modules/react-native-vector-icons/dist/Ionicons';
import styles from './style';

const ScreenHeader = (props) => {
    const navigation = useContext(NavigationContext);

    const handleBackPress = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.header}>
            {props.isbackArrow &&
                <TouchableOpacity onPress={handleBackPress} style={styles.back}>
                    <Ionicons name={'ios-arrow-back'} size={24} color={'black'} />
                </TouchableOpacity>
            }
            <View style={styles.title}>
                <Text font="medium" color={'balck'}>
                    {props.title.toUpperCase()}
                </Text>
            </View>
        </View>
    )
}

export default ScreenHeader