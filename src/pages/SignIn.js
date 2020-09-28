import React from 'react';
import { Form } from '../components';
import * as ROUTES from '../constants/routes';
import { Footer, HeaderWithLogo } from '../containers';

const SignIn = () => {
	return (
		<>
			<HeaderWithLogo>
				<Form>
					<Form.Title>Sign In</Form.Title>
					<Form.Base noValidate>
						{/* <Form.Label htmlFor='email'>Email or phone number</Form.Label> */}
						<Form.Input
							id='email'
							type='email'
							name='email'
							placeholder='Email or phone number'
						/>
						{/* <Form.Label htmlFor='password'>Password</Form.Label> */}
						<Form.Input
							id='password'
							type='password'
							name='password'
							placeholder='Password'
						/>
						<Form.Submit>Sign In</Form.Submit>
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
