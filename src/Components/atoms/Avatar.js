import React from 'react'
import './Avatar.css'
const Avatar = ({ ...props}) => {
    return(
    <div>
    <img className='Avatar'src='/static/Profile.png' alt="Avatar" />
    </div>
    )
};

export default Avatar