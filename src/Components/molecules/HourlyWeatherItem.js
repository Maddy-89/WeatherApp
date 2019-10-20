import React from 'react'
import WeatherIcon from '../atoms/WeatherIcon';

const HourlyWeatherItem = () => {
    return (
        <li>
           <div>Hour</div>
           <WeatherIcon/>
           <div>22</div> 
        </li>
    );
};

export default HourlyWeatherItem
