import { StyleSheet, Dimensions } from 'react-native';

const {width: screenwidth} = Dimensions.get('window')
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    textStyle: {
        fontSize: 14, 
        color: '#303030'
    },
    itemContainer: {
        flexDirection: 'row',
        margin: 10, 
        height: 100, 
        borderRadius: 5, 
        backgroundColor: '#f8f8f8'
    },
    logoImage: {
        width: 100,
        height: 100,
        borderRadius: 5
    },
    ImageRectangle: {
        width: 100,
        height: 100,
        borderRadius: 5
    },
    detailContainer: {
        flex: 1,
        paddingHorizontal: 20
    },
    detailImage: {
        width: screenwidth,
        height: 200
    },
    detailImageContainer: {
        width: screenwidth,
        height: 200
    },

});

export default styles;
