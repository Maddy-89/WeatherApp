import React from 'react';
import TextLink from '../Components/atoms/TextLink';
import WeatherPerson from '../Components/molecules/WeatherPerson';
import ComplaintForm from '../Components/organisms/ComplaintForm';
import PageTemplate from '../Components/templates/PageTemplate';
import { CURRENT_WEATHER } from '../data/mockWeather';

const WeatherPage = () => {
  return (
    <PageTemplate
      city={CURRENT_WEATHER.name}
      temperature={CURRENT_WEATHER.main.temp}
      changeCity={() => console.log('Change the city!')}
    >
      <TextLink>I changed my mind!</TextLink>
      <WeatherPerson />
      <ComplaintForm />
    </PageTemplate>
  );
};

export default WeatherPage;
