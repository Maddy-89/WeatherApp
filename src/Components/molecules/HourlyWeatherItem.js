import React from 'react'
import WeatherIcon from '../atoms/WeatherIcon';
import './HourlyWeatherItem.css'

const HourlyWeatherItem = ({ time, icon, maxTemp, ...props }) => {
    return (
        <li className='HourlyWeatherItem'>
           <div>{time}</div>
           <WeatherIcon icon={icon}/>
           <div>{Math.round(maxTemp)}°</div> 
        </li>
    );
};

export default HourlyWeatherItem
