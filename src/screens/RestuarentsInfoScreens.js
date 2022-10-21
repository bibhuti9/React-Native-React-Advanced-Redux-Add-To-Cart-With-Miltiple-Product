import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import ListCategoryComponents from '../components/restuarent/ListCategoryComponents';
import { BACKENDURI } from '../../config';
import { FlatList } from 'react-native-gesture-handler';
import ListMenusComponents from '../components/restuarent/ListMenusComponents';
import Spinner from '../components/common/Spinner';
export default function RestuarentsInfoScreens({ route }) {
    const { currentSelectedCategory, item } = route.params;
    const [currentCategoryId, setCurrentCategoryId] = useState(0);
    const [currentCategory, setCurrentCategory] = useState(currentSelectedCategory);
    const [menus, setMenus] = useState([]);
    const [spinner, setSpinner] = useState(false);
    useEffect(() => {
        setCurrentCategoryId(item.categoryAllDetail.filter((value) => {
            return value.cname === currentCategory;
        }));
    }, [currentCategory]);

    useEffect(() => {
        setSpinner(true);
        const r_id = item._id;
        const c_id = currentCategoryId[0]?._id;
        fetch(`${BACKENDURI}/restuarent/fetchAllMenuByRestuarentByCategoryId`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                r_id,
                c_id
            })
        }).then((response) => { return response.json() })
            .then(({ Data }) => {
                setMenus(Data);
                setSpinner(false);
            })
    }, [currentCategoryId]);


    return (
        <View style={{ flex: 1, }}>
            <ListCategoryComponents
                currentCategory={currentCategory}
                allCategory={item?.categoryAllDetail}
                setCurrentCategory={setCurrentCategory}
            />
            {spinner ? <Spinner /> : null}
            <ListMenusComponents
                menus={menus}
            />
        </View>
    )
}