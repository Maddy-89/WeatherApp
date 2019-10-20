import React from 'react';
import ComplaintLink from '../Components/atoms/ComplaintLink';
import Forecast from '../Components/organisms/Forecast';
import PageTemplate from '../Components/templates/PageTemplate';

const WeatherPage = () => {
  return (
    <PageTemplate>
      <Forecast />
      <ComplaintLink />
    </PageTemplate>
  );
};

export default WeatherPage;
