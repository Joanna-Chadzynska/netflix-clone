import { useEffect, useState } from 'react';

export const useForm = (callback, validate) => {
	const [values, setValues] = useState({});
	const [errors, setErrors] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);

	useEffect(() => {
		if (Object.keys(errors).length === 0 && isSubmitting) {
			callback();
		}
	}, [callback, errors, isSubmitting, values]);

	const handleSubmit = (event) => {
		if (event) event.preventDefault();
		setErrors(validate(values));
		setIsSubmitting(true);
		callback();
	};

	const handleChange = (event) => {
		event.persist();
		setValues((values) => ({
			...values,
			[event.target.name]: event.target.value,
		}));
		// setErrors(validate(values));
	};

	return {
		handleChange,
		handleSubmit,
		values,
		errors,
	};
};
