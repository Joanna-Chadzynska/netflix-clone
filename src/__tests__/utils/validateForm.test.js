import { validateForm } from '../../utils';

test('validate form with no errors', () => {
	const values = {
		firstName: 'Joanna',
		email: 'jojo@gmail.com',
		password: 'abrakadabra',
	};
	const validate = validateForm(values);
	expect(validate).toStrictEqual({});
});

test('validate form with errors', () => {
	const values = {
		firstName: '',
		email: 'jojomail.com',
		password: 'abr',
	};
	const errors = {
		firstName: 'First name is required',
		email: 'Please enter a valid email address',
		password: 'Password must be 8 or more characters',
	};
	const validate = validateForm(values);
	expect(validate.firstName).toBe(errors.firstName);
	expect(validate.email).toBe(errors.email);
	expect(validate.password).toBe(errors.password);
});

test('validate form with errors, valid first name length', () => {
	const values = {
		firstName: 'a',
		email: '',
		password: 'abr',
	};
	const errors = {
		firstName: 'Name should have at least 2 characters',
		email: 'Email is required!',
		password: 'Password must be 8 or more characters',
	};
	const validate = validateForm(values);
	expect(validate.firstName).toBe(errors.firstName);
	expect(validate.email).toBe(errors.email);
	expect(validate.password).toBe(errors.password);
});
