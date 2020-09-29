export const validateForm = (values) => {
	const regexMail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

	let errors = {};

	if (!values.firstName) {
		errors.firstName = 'First name is required';
	} else if (values.firstName.length < 2) {
		errors.firstName = 'Name should have at least 2 characters';
	}

	if (!values.email) {
		errors.email = 'Email is required!';
	} else if (!regexMail.test(values.email)) {
		errors.email = 'Please enter a valid email address';
	}

	if (!values.password) {
		errors.password = 'Password is required';
	} else if (values.password.length < 8) {
		errors.password = 'Password must be 8 or more characters';
	}

	return errors;
};
