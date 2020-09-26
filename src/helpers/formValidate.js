import { useEffect, useState } from 'react';

export const validateForm = (values) => {
	const regexMail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

	let errors = {};

	if (!values.email) {
		errors.email = 'Email address is required';
	} else if (!regexMail.test(values.email)) {
		errors.email = 'Email address is invalid';
	}

	if (!values.password) {
		errors.password = 'Password is required';
	} else if (values.password.length < 8) {
		errors.password = 'Password must be 8 or more characters';
	}

	return errors;
};

export const useForm = (callback, validate) => {
	const [values, setValues] = useState({});
	const [errors, setErrors] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);

	useEffect(() => {
		if (Object.keys(errors).length === 0 && isSubmitting) {
			callback();
		}
	}, [callback, errors, isSubmitting]);

	const handleSubmit = (event) => {
		if (event) event.preventDefault();
		setErrors(validate(values));
		setIsSubmitting(true);
		setValues({});
	};

	const handleChange = (event) => {
		event.persist();
		setValues((values) => ({
			...values,
			[event.target.name]: event.target.value,
		}));
	};

	return {
		handleChange,
		handleSubmit,
		values,
		errors,
	};
};
