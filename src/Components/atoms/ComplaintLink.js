import React from 'react'
import TextLink from './TextLink';

const ComplaintLink = ({...props}) => {
    return (
        <div>
            <p>Don;t like the Weather?</p>
            <TextLink>Complain to the weather person!</TextLink>
        </div>
    );
};

export default ComplaintLink
