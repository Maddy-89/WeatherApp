import React from 'react'
import WeatherIcon from '../atoms/WeatherIcon';
import HourlyWeather from './HourlyWeather';
import moment from 'moment';
import './DailyWeatherItem.css'

const DailyWeatherItem = ({date, icon, list, maxTemp, minTemp, ...props}) => {
    return (
        <div>
            <div className='Item'>
            <h3>{moment(date).format('dddd')}</h3>
            <div ClassName='Items'>
            <WeatherIcon icon={icon}/>
            <div>{maxTemp}</div>
            <div>{minTemp}</div>
            </div>
            </div>
            <HourlyWeather list={list}/>    
        </div>
    )
}

export default DailyWeatherItem
