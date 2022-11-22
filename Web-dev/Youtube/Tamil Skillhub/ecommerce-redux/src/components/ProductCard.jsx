import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ProductCard(props) {
    const navigate = useNavigate()
    return (
        <div className='card m-2 cursor-pointer' style={{ width: 300 }} role="button" onClick={() => navigate(`/product/${props.id}`)}>
            <div className='mt-2'>
                <img src={props.thumbnail} alt={props.title} height={150} width={180} className="border-radius-9" />
            </div>
            <div className='card-body'>
                <h5 className='card-title'>{props.title}</h5>
                <h6 className='card-text'>Price : ${props.price}</h6>
                <h6 className='card-text'>Discount : {props.discountPercentage}%</h6>
                <h6 className='card-text'>Rating : {props.rating}</h6>

                <div>
                    {props.stock > 40 ? <button className='btn btn-success'>Available</button> : <button className='btn btn-outline-danger'>Out of Stack</button>}
                </div>

            </div>
        </div>
    )
}
