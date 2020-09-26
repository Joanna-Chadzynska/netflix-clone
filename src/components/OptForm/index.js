import React, { createContext, useContext } from 'react';
import { useForm } from '../../helpers/formValidate';
import { validateForm } from './../../helpers/formValidate';
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
	const emailSend = () => {
		console.log('No errors, submit callback called!');
	};
	const { values, errors, handleChange, handleSubmit } = useForm(
		emailSend,
		validateForm
	);

	return (
		<Container {...restProps}>
			<InputContext.Provider value={{ values, handleChange, errors }}>
				<Inner onSubmit={handleSubmit} noValidate>
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
	const { values, handleChange, errors } = useContext(InputContext);

	return (
		<>
			<Input
				{...restProps}
				onChange={handleChange}
				value={values.email || ''}
			/>
			{errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
		</>
	);
};

OptForm.Label = function OptFormLabel({ children, ...restProps }) {
	return <Label {...restProps}>{children}</Label>;
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
