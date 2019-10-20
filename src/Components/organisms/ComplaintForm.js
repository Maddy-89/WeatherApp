import React from 'react'
import FormField from '../molecules/FormField';
import Button from '../atoms/Button';
import Label from '../atoms/Label'

const ComplaintForm = props => {
    return (
        <div>
            <form>
                <Label>Make a Complaint</Label>
                <Label>Your Name</Label>
                <FormField type="text" />
                <Label>Email</Label>
                <FormField type="text" />
                <Label>ComplaintForm</Label>
                <FormField type="textarea" />
                <Button>Submit</Button>
            </form>
        </div>
    );
};

export default ComplaintForm
