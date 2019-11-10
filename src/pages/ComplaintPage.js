import React from 'react';
import { Link } from 'react-router-dom';
import TextLink from '../components/atoms/TextLink';
import WeatherPerson from '../components/molecules/WeatherPerson';
import ComplaintForm from '../components/organisms/ComplaintForm';
import PageTemplate from '../components/templates/PageTemplate';
import '../components/atoms/TextLink.css'
const ComplaintPage = ({ city, temperature, changeCity, ...props }) => {
  return (
    <PageTemplate city={city} temperature={temperature} changeCity={changeCity}>
      <div className='container'>
      <Link  to="/">
        <TextLink className='TextLink'>I changed my mind!</TextLink>
      </Link>
      </div>
      <WeatherPerson />
      <ComplaintForm />
    </PageTemplate>
  );
};

export default ComplaintPage;