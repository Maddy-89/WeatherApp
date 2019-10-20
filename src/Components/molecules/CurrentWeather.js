import React from 'react';
import CurrentCity from '../atoms/CurrentCity';
import CurrentTemperature from '../atoms/CurrentTemperature';

const CurrentWeather = () => {
    return (
        <div>
            <CurrentCity/>  
            <CurrentTemperature/>
        </div>
    );
};

export default CurrentWeather;
