import React from 'react'

export default function ProductListItems(props) {
    return (
        <div className='card my-4 mx-auto p-3 d-flex flex-row' style={{ width: "80vw" }} >
            <div className=''>
                <img src={props.thumbnail} alt={props.title} height={150} width={180} className="border-radius-9 " />
            </div>
            <div className='card-body d-flex flex-row align-items-center justify-content-between'>
                <h5 className='card-title'>{props.title}</h5>
                <h6 className='card-text text-bg-info'>Price : ${props.price}</h6>
                <div>
                    <button className='btn btn-danger  ms-3' onClick={props.incrementItem}>+</button>
                    <span className='ms-3'>Quantity : {props.count}</span>
                    <button className='btn btn-danger ms-3 ' onClick={props.decrementItem}>-</button>
                </div>
                <button className='btn btn-danger ms-3' onClick={props.removeItem}>Remove</button>
            </div>

        </div >
    )
}
