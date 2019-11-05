import React from 'react';
import Button from '../atoms/Button';
import FormField from '../molecules/FormField';

class ComplaintForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', email: '', message: '', loading: false };
  }

  handleSubmit(event) {
    if (window.confirm('Thank you for submitting a Complaint.')) {
      // this.onCancel() 
    }
    this.setState({name: event.target.value})  
  }

  render() {
    return (
      <div>
        <form>
          <FormField type="text" value={this.state.name} name="name" label="Name" />
          <FormField type="text" value={this.state.email}name="email" label="Email Address" />
          <FormField type="textarea" value={this.state.message} name="message" label="Message" />
          <Button onButtonClick={(event) => this.handleSubmit()}>Submit</Button>
        </form>
      </div>


    );
  }
};

export default ComplaintForm;
