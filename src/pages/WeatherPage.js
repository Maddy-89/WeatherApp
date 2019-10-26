import React from 'react';
import TextLink from '../Components/atoms/TextLink';
import Forecast from '../Components/organisms/Forecast';
import PageTemplate from '../Components/templates/PageTemplate';
import { CURRENT_WEATHER, HOURLY_FORECAST } from '../data/mockWeather';

const WeatherPage = () => {
  return (
    <PageTemplate
      city={CURRENT_WEATHER.name}
      temperature={CURRENT_WEATHER.main.temp}
      changeCity={() => console.log('Change the city!')}
    >
      <Forecast forecast={HOURLY_FORECAST} />
      <TextLink>Complain about the weather!</TextLink>
    </PageTemplate>
  );
};

export default WeatherPage;