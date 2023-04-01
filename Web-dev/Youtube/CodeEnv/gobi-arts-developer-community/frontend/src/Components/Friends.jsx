import React from 'react';
import '../Styles/friends.scss';
import { recentRequest } from '../Constants/dummy';
const Friends = () => {
    return (
        <div className='friends__container'>
            {recentRequest.map((request) => (
                <div
                    className='friend__container'
                    key={request?.name}
                >
                    <img
                        src={request?.profile}
                        alt={`${request?.name} Profile`}
                    />
                    <p>
                        {request?.name} <span>Last seen recently</span>{' '}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default Friends;
