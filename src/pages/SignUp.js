import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form } from '../components';
import * as ROUTES from '../constants/routes';
import { Footer, Header } from '../containers';
import { validateForm } from '../helpers/formValidate';
import { useForm } from '../hooks/useForm';
import { FirebaseContext } from './../context/firebase';

const SignUp = () => {
	const [authError, setAuthError] = useState('');
	const history = useHistory();
	const { firebase } = useContext(FirebaseContext);

	const handleSignUp = () => {
		console.log(values);
		return firebase
			.auth()
			.createUserWithEmailAndPassword(values.email, values.password)
			.then((result) =>
				result.user
					.updateProfile({
						displayName: values.firstName,
						photoURL: Math.floor(Math.random() * 5) + 1,
					})
					.then(() => {
						history.push(ROUTES.BROWSE);
					})
			)
			.catch((error) => {
				setAuthError(error.message);
			});
	};

	const { values, errors, handleChange, handleSubmit } = useForm(
		handleSignUp,
		validateForm
	);

	return (
		<>
			<Header>
				<Form>
					<Form.Title>Sign In</Form.Title>
					{authError && <Form.Error>{authError}</Form.Error>}
					<Form.Base onSubmit={handleSubmit} noValidate>
						<Form.Input
							id='firstName'
							type='text'
							name='firstName'
							value={values.firstName || ''}
							placeholder='First Name'
							onChange={handleChange}
						/>
						{errors.firstName && <Form.Error>{errors.firstName}</Form.Error>}
						<Form.Input
							id='email'
							type='email'
							name='email'
							value={values.email || ''}
							placeholder='Email or phone number'
							onChange={handleChange}
						/>
						{errors.email && <Form.Error>{errors.email}</Form.Error>}
						<Form.Input
							id='password'
							type='password'
							name='password'
							autocomplete='off'
							value={values.password || ''}
							placeholder='Password'
							onChange={handleChange}
						/>

						{errors.password && <Form.Error>{errors.password}</Form.Error>}

						<Form.Submit disabled={errors.length > 0} type='submit'>
							Sign In
						</Form.Submit>

						<Form.Help>
							<div>
								<Form.Input type='checkbox' name='checkbox' id='checkbox' />
								<Form.Label htmlFor='checkbox'>
									<span>Remember me</span>
								</Form.Label>
							</div>

							<Form.Link to={ROUTES.LOGIN_HELP}>Need help?</Form.Link>
						</Form.Help>
					</Form.Base>

					<Form.Text>
						Already a user?{' '}
						<Form.Link to={ROUTES.SIGN_IN}>Sign in now</Form.Link>
					</Form.Text>

					<Form.TextSmall>
						This page is protected by Google reCAPTCHA to ensure you're not a
						bot.
						<a href='!#'>Learn more.</a>
					</Form.TextSmall>
				</Form>
			</Header>
			<Footer />
		</>
	);
};

export default SignUp;
