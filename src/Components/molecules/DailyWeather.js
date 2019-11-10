import React from 'react'
import WeatherIcon from '../atoms/WeatherIcon';
import HourlyWeather from './HourlyWeather';
import moment from 'moment';
import './DailyWeather.css'

const DailyWeatherItem = ({date, icon, list, maxTemp, minTemp, ...props}) => {
    return (
        <div className = 'DW'>
            <div className = 'DWItem'>
                <h3>{moment(date).format('dddd')}</h3>
                <li className = 'DWItems'>
                    <WeatherIcon icon={icon}/>
                    <div>{maxTemp}°</div>
                    <div>{minTemp}°</div>
                </li>
            </div>
            <HourlyWeather list={list}/>    
        </div>
    )
}

export default DailyWeatherItem
