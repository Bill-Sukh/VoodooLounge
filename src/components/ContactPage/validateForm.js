  
export default function validateForm(values) {
    let errors = {};
  
    if (!values.name.trim()) {
      errors.name = 'Name required';
    }

    if (!values.email) {
      errors.email = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
    
    if (!values.phonenumber) {
      errors.phonenumber = 'phonenumber is required';
    } else if (values.phonenumber.length < 9) {
      errors.phonenumber = 'phonenumber needs to be 9 characters or more';
    }
  
    if (!values.feedback) {
      errors.feedback = 'feedback is required';
    }

    return errors;
  }