import React from 'react';
import './profile.css';

const Profile = (username, email) => {
        return(
            <div className='div-profile'>
                <div className='div-profile-div'>
                    <div style={{fontSize:'2.5rem'}}>{username}</div>
                    <div>{email}</div>
                </div>
            </div>
        )  
}

export default Profile;