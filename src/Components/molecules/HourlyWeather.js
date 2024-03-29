import React from 'react'
import HourlyWeatherItem from './HourlyWeatherItem';
import moment from 'moment'
import './HourlyWeather.css'

const HourlyWeather = ({ list, ...props}) => {
    return (
        <ul className='HourlyWeather'>
            {list.map(item => 
            <HourlyWeatherItem
            key={item.dt}
            time={moment(item.dt_txt).format('ha')}
            icon={item.weather[0].icon}
            maxTemp={item.main.temp_max}
            />
    )}    
        </ul>
    );
};

export default HourlyWeather
