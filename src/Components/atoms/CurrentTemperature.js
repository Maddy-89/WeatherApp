import React from 'react'
import './CurrentTemperature.css'

const CurrentTemperature = ({temperature, ...props}) => {
    return<div className='CurrentTemperature'>{temperature}°</div>;
};

export default CurrentTemperature
