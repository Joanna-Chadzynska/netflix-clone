import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form } from '../components';
import * as ROUTES from '../constants/routes';
import { Footer, HeaderWithLogo } from '../containers';
import { validateForm } from '../helpers/formValidate';
import { useForm } from '../hooks/useForm';
import { FirebaseContext } from './../context/firebase';

const SignIn = () => {
	const [authError, setAuthError] = useState('');
	const history = useHistory();
	const { firebase } = useContext(FirebaseContext);

	const handleSignIn = () => {
		return firebase
			.auth()
			.signInWithEmailAndPassword(values.email, values.password)
			.then(() => {
				history.push(ROUTES.BROWSE);
			})
			.catch((error) => {
				console.log(error.message);
				setAuthError(error.message);
			});
	};

	const { values, errors, handleChange, handleSubmit } = useForm(
		handleSignIn,
		validateForm
	);

	return (
		<>
			<HeaderWithLogo>
				<Form>
					<Form.Title>Sign In</Form.Title>
					{authError && <Form.Error>{authError}</Form.Error>}

					<Form.Base onSubmit={handleSubmit} method='POST' noValidate>
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

						<Form.Submit type='submit'>Sign In</Form.Submit>

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

					<Form.Text>Login with Facebook</Form.Text>

					<Form.Text>
						New to Netflix?{' '}
						<Form.Link to={ROUTES.SIGN_UP}>Sign up now</Form.Link>
					</Form.Text>

					<Form.TextSmall>
						This page is protected by Google reCAPTCHA to ensure you're not a
						bot.
						<a href='!#'>Learn more.</a>
					</Form.TextSmall>
				</Form>
			</HeaderWithLogo>

			<Footer />
		</>
	);
};

export default SignIn;
