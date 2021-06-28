import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    header: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    back: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        maxWidth: 150,
    },
    title: {
        flex: 1,
    }
});

export default styles;
