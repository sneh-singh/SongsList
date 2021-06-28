import React from 'react';
import { View, Text, Image } from 'react-native';
import moment from 'moment';
import styles from './style';
import { defaultImage } from '../../images';

const Detail = (props) => {
    const { route: { params: {
        item: {
            artistName = '',
            artistId = '',
            artworkUrl100 = '',
            collectionCensoredName = '',
            collectionExplicitness = '',
            collectionName = '',
            collectionPrice = '',
            country = '',
            kind = '',
            releaseDate = ''
        } = {}
    } = {} } = {} } = props;
    return (
        <>
            <View style={styles.detailContainer}>
                <View style={styles.detailImageContainer}>
                    <Image source={{ uri: artworkUrl100 !== '' ? artworkUrl100 : defaultImage }} style={styles.detailImage} resizeMode="contain" />
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center', paddingTop: 20}}>
                {collectionCensoredName !== '' && <Text style={{ fontSize: 15, color: '#303030' }} numberOfLines={2}>Collection Censored Name:  {collectionCensoredName}</Text>}
                {artistId !== '' && <Text style={styles.textStyle}>Artist Id:  {artistId}</Text>}
                {collectionName !== '' && <Text style={styles.textStyle}>Collection Name:  {collectionName}</Text>}
                {collectionPrice !== '' && <Text style={styles.textStyle}>Price:  {collectionPrice}$</Text>}
                {country !== '' && <Text style={styles.textStyle}>Country:  {country}</Text>}
                {kind !== '' && <Text style={styles.textStyle}>Kind:  {kind}</Text>}
                {collectionExplicitness !== '' && <Text style={styles.textStyle}>Collection Explicitness:  {collectionExplicitness}</Text>}
                {releaseDate !== '' && <Text style={styles.textStyle}>Release Date: {moment(releaseDate).format('MMM Do YYYY, h:mm A')}</Text>}
                {artistName !== '' && <Text style={{ paddingTop: 10, fontSize: 14, color: '#979797' }}>By {artistName}</Text>}
                </View>
            </View>
        </>
    )
}

export default Detail