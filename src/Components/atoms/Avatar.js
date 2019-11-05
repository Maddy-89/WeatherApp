import React from 'react'

const Avatar = ({image, ...props}) => {
    return(
    <div>
    <img src="{image}" alt="Avatar"/>
    </div>
    )
};

export default Avatar