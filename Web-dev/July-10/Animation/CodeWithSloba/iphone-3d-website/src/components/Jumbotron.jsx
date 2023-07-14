import React from 'react';
import iPhone from '../assets/images/iphone-14.jpg';
import HoldingIPhone from '../assets/images/iphone-hand.png';
const Jumbotron = () => {
    return (
        <div className='jumbotron-section wrapper'>
            <h2 className='title'>New</h2>
            <img
                src={iPhone}
                alt='iPhone 14 Pro Logo'
                className='logo'
            />
            <p className='text'>Big and bigger</p>
            <span className='description'>
                From $51.53/mo for 20mo. or $999 before trade-in
            </span>
            <ul className='links'>
                <li>
                    <button className='button'>Buy</button>
                </li>
                <li>
                    <a className='link'>Learn more</a>
                </li>
            </ul>
            <img
                className='iphone-img'
                src={HoldingIPhone}
                alt='HoldingIPhone'
            />
        </div>
    );
};

export default Jumbotron;
