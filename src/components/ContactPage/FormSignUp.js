import {useState, useEffect} from 'react';

const FormSignUp = (getSubmittedUser,submitForm, validate) => {
    const[values, setValues] = useState({
        name: '',
        email: '',
        phonenumber: '',
        inquiry: '',
        feedback: ''
    });

    const[errors, setErrors] = useState({});;
    const[isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = e => {
        const {name,value} = e.target;
        setValues({
            ...values,
            [name] :  value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        setErrors(validate(values));
        setIsSubmitting(true);
    };

    useEffect(
        () => {
          if (Object.keys(errors).length === 0 && isSubmitting){
            getSubmittedUser(values.name);
            submitForm(true);        
          }
        },
        [errors]
    );

    return {handleChange, handleSubmit, values , errors};
};

export default FormSignUp;