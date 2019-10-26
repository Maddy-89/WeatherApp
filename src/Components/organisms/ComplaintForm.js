import React from 'react'
import FormField from '../molecules/FormField';
import Button from '../atoms/Button';
import Label from '../atoms/Label'

const ComplaintForm = props => {
    return (
        <div>
            <form>
                <Label>Make a Complaint</Label>
                <FormField type="text" name="name" label="Name" />
                <FormField type="text" name="email" label="Email" />
                <FormField type="text" name="message" label="Message" />
                <Button>Submit</Button>
            </form>
        </div>
    );
};

export default ComplaintForm
