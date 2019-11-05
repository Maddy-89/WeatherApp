import React from 'react'
import CurrentCity from '../atoms/CurrentCity';
import CurrentTemperature from '../atoms/CurrentTemperature';
import TextLink from '../atoms/TextLink';
import './CurrentWeather.css'

const CurrentWeather = ({city, temperature, onTextLinkClick, ...props}) => {
    return (
        <div className='CurrentWeather'>
            <CurrentCity city={city} />
            <TextLink onButtonClick={onTextLinkClick}>Change City</TextLink>
            <CurrentTemperature temperature={temperature} />
        </div>
    );
};

export default CurrentWeather;
