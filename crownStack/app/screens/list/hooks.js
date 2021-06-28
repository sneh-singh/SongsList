import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { NavigationContext } from '@react-navigation/native';
import { URL } from '../../constants';
import { screenNames } from '../../routes/screen-names';

export const useList = () => {
    const [listData, setListData] = useState();
    const navigation = useContext(NavigationContext);

    useEffect(() => {
        getListData();
    }, []);

    const getListData = () => {
        axios.get(URL)
        .then((response) => {
            const {results, resultCount } = response.data;
            setListData(results);
        })
        .catch(error => console.error(error))
    }

    const handleClick = (item) => {
        navigation.navigate(screenNames.screen.Detail, { item });
    }

    return {
        listData,
        handleClick
    }
}