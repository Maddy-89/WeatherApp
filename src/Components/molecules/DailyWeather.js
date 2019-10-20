import React from 'react'
import WeatherIcon from '../atoms/WeatherIcon';
import HourlyWeather from './HourlyWeather';

const DailyWeatherItem = () => {
    return (
        <div>
            <h3>Day of the Week</h3>
            <WeatherIcon Icon="Sunny"/>
            <div>Max temp</div>
            <div>Min Temp</div>
            <HourlyWeather/>    
        </div>
    )
}

export default DailyWeatherItem
