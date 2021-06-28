import React from 'react';
import { View, Text } from 'react-native';
import Ionicons from '../../../node_modules/react-native-vector-icons/dist/Ionicons';
import styles from './style';
import ScreenHeader from '../../components/header';

const Home = () => {
    return (
        <>
            <ScreenHeader title={' '} isbackArrow={false} />
            <View style={styles.container}>
                <Text style={styles.textStyle}>Welcome to Crown-Stack</Text>
                <Ionicons name={'ios-happy'} style={styles.textStyle} />
            </View>
        </>
    )
}

export default Home