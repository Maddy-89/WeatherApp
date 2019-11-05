import React from 'react'
import HourlyWeatherItem from './HourlyWeatherItem';
import moment from 'moment'
const HourlyWeather = ({ list, ...props}) => {
    return (
        <ul>
            {list.map(item => 
            <HourlyWeatherItem
            key={item.}
            time={moment(item.dt_txt).format('ha')}
            icon={item.weather[0].icon}
            maxTemp={item.main.temp_max}
            />
    )}    
        </ul>
    );
};

export default HourlyWeather
