import React from 'react';
import '../Styles/recentRequest.scss';
import { recentRequest } from '../Constants/dummy';
const RecentRequest = () => {
    return (
        <div className='recent__requests'>
            {recentRequest.map((request) => (
                <div
                    className='recent__container'
                    key={request?.name}
                >
                    <div className='recent__user'>
                        <img
                            src={request?.profile}
                            alt={`${request?.name} Profile`}
                        />
                        <p>{request?.name}</p>
                    </div>
                    <div className='request__actions'>
                        <button>Accept</button>
                        <button>Decline</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default RecentRequest;
