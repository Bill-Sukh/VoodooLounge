import {useState} from 'react';

const FormSignUp = validateForm => {

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
        setErrors(validateForm(values));
        setIsSubmitting(true);
    };

    return {handleChange, values, handleSubmit, errors};
};

export default FormSignUp;