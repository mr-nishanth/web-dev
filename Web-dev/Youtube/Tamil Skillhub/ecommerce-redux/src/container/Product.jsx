import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { ProductList } from '../data/ProductList'
import { addItem } from '../redux/reducer/card'

export default function Product() {
    const params = useParams()
    const props = ProductList.find((ele) => ele.id === parseInt(params.id))
    const navigate = useNavigate()

    // Redux
    const dispatch = useDispatch()
    // end of Redux
    const handleAddToCart = () => {
        dispatch(addItem({ ...props, count: 1 }))
    }
    const handleBuy = () => {

    }


    return (
        <>
            <h4 className='mt-3'>Product</h4>
            <div className='card mx-auto ' style={{ width: 400 }} >
                <div className='mt-2'>
                    <img src={props.thumbnail} alt={props.title} height={250} width={400} className="border-radius-9" />
                </div>
                <div className='card-body'>
                    <h5 className='card-title'>{props.title}</h5>
                    <h6 className='card-text'>Price : ${props.price}</h6>
                    <h6 className='card-text'>Discount : {props.discountPercentage}%</h6>
                    <h6 className='card-text'>Rating : {props.rating}</h6>

                    <div className='d-flex justify-content-between mt-4'>
                        {
                            props.stock > 40 ? (
                                <>
                                    <button className='btn btn-success' onClick={handleBuy}>Buy Now</button>
                                    <button className='btn btn-primary' onClick={handleAddToCart}>Add Cart</button>
                                </>
                            ) : (
                                <button className='btn btn-outline-danger mx-auto' >Out of Stack</button>
                            )
                        }
                    </div>

                </div>
            </div>
        </>
    )
}
