import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        width: width,
        height: height,
        backgroundColor: 'grey'
    },
    textStyle: {
        textAlign: 'center',
        color: '#ffe',
        fontSize: 60
    }
});

export default styles;
