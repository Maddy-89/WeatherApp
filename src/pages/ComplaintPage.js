import React from 'react';
import TextLink from '../Components/atoms/TextLink';
import WeatherPerson from '../Components/molecules/WeatherPerson';
import ComplaintForm from '../Components/organisms/ComplaintForm';
import PageTemplate from '../Components/templates/PageTemplate';

const ComplaintPage = () => {
    return (
        <PageTemplate>
            <TextLink>I Regret This Take Me Back</TextLink>
            <WeatherPerson/>
            <ComplaintForm/>
        </PageTemplate>
    );
};

export default ComplaintPage
