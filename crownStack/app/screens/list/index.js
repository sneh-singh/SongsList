import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import moment from 'moment';
import styles from './style';
import { useList } from './hooks';
import { defaultImage } from '../../images';

const List = () => {
    const {
        listData,
        handleClick
    } = useList();
    return (
        <View style={styles.container}>
            {listData && listData.length && <FlatList
                data={listData}
                renderItem={( item ) => {
                const { item: { 
                    artistName = '',
                    artworkUrl100 = '',
                    trackCensoredName = '',
                    kind = '',
                    releaseDate = ''
                } = {} } = item;
                    return (
                       <TouchableOpacity style={styles.itemContainer} onPress={() => handleClick(item.item)}>
                           <View style={styles.ImageRectangle}>
                                <Image source={{uri: artworkUrl100 !== '' ? artworkUrl100 : defaultImage}} style={styles.logoImage} resizeMode="contain" />
                           </View>
                           <View style={{padding: 10, width: 260}}>
                                {trackCensoredName !== '' && <Text style={{fontSize: 15, color: '#303030'}} numberOfLines={1}>{trackCensoredName}</Text>}
                                {kind !== '' && <Text style={styles.textStyle}>{kind}</Text>}
                                {releaseDate !== '' && <Text style={styles.textStyle}>{moment(releaseDate).format('MMM Do YYYY, h:mm A')}</Text>}
                                {artistName !== '' && <Text style={{paddingTop: 5, fontSize: 14, color: '#979797'}}>By {artistName}</Text>}
                           </View>
                        </TouchableOpacity>
                    );
                }}
                keyExtractor={(item) => item}
            />}
            {!listData && <View><Text style={{textAlign: 'center'}}>No Data Found</Text></View>}
        </View>
    )
}

export default List