import React from 'react'
import TextArea from '../atoms/TextArea'
import TextInput from '../atoms/TextInput'

const FormField = ({ type, ...props }) => {
    return (
        <>
           {type === 'text' && <TextInput />}
           {type === 'textarea' && <TextArea />}
        </>
    );
};

export default FormField
