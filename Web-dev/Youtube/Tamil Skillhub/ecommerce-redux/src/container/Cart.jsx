import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductListItems from '../components/ProductListItems'
import { modifyItem } from '../redux/reducer/card';

export default function Cart() {
    const items = useSelector(state => state.card.list)

    const dispatch = useDispatch();

    const incrementItem = (item) => {
        dispatch(modifyItem({ ...item, count: item.count + 1 }))
    }
    const decrementItem = (item) => {
        dispatch(modifyItem(item))
    }
    const removeItem = (item) => {

    }


    return (
        <>
            {
                items && items.map((item) => {
                    return (
                        <ProductListItems {...item} key={item.id} incrementItem={() => incrementItem(item)} decrementItem={() => decrementItem(item)} removeItem={() => removeItem(item)} />
                    )
                })
            }
        </>
    )
}
