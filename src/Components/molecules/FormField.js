import React from 'react'
import Label from '../atoms/Label';
import TextArea from '../atoms/TextArea'
import TextInput from '../atoms/TextInput'
import './FormField.css'

const FormField = ({ label, type, name, ...props }) => {
    return (
        <div className='FormField'>
            <Label name={name}>{label}</Label>
           {type === 'text' && <TextInput />}
           {type === 'textarea' && <TextArea />}
        </div>
    );
};

export default FormField
