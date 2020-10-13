import React, { createContext, useContext } from 'react';
import { useForm } from '../../hooks/useForm';
import { validateForm } from '../../utils';
import {
	Break,
	Button,
	Container,
	ErrorMessage,
	Inner,
	Input,
	InputPlacement,
	Label,
	Text,
} from './styles/optForm';

const InputContext = createContext();

const OptForm = ({ children, ...restProps }) => {
	// const emailSend = () => {
	// 	// console.log('No errors, submit callback called!');
	// };

	const { values, errors, handleChange, handleSubmit } = useForm(
		console.log('No errors, submit callback called!'),
		validateForm
	);

	return (
		<Container {...restProps}>
			<InputContext.Provider value={{ values, handleChange, errors }}>
				<Inner onSubmit={handleSubmit} hasErrors={errors.email} noValidate>
					{children}
				</Inner>
			</InputContext.Provider>
		</Container>
	);
};

OptForm.Text = function OptFormText({ children, ...restProps }) {
	return <Text {...restProps}>{children}</Text>;
};

OptForm.Button = function OptFormButton({ children, ...restProps }) {
	return (
		<Button {...restProps}>
			{children}
			<img src='/images/icons/chevron-right.png' alt='Try Now' />
		</Button>
	);
};

OptForm.Input = function OptFormInput({ ...restProps }) {
	const { values, handleChange } = useContext(InputContext);

	return (
		<Input {...restProps} onChange={handleChange} value={values.email || ''} />
	);
};

OptForm.ErrorMessage = function OptFormErrorMessage({ message, ...restProps }) {
	const { errors } = useContext(InputContext);
	return (
		<ErrorMessage {...restProps} data-testid='error-message'>
			{errors.email ? errors.email : message}
		</ErrorMessage>
	);
};

OptForm.Label = function OptFormLabel({ children, ...restProps }) {
	const { errors } = useContext(InputContext);
	return (
		<Label {...restProps} hasErrors={errors.email}>
			{children}
		</Label>
	);
};
OptForm.InputPlacement = function OptFormInputPlacement({
	children,
	...restProps
}) {
	return <InputPlacement {...restProps}>{children}</InputPlacement>;
};

OptForm.Break = function OptFormTitle({ ...restProps }) {
	return <Break {...restProps} />;
};

export default OptForm;
