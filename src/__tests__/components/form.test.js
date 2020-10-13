import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { Form } from '../../components';
import Theme from '../../styles/theme';

jest.mock('react-router-dom');

describe('<Form/>', () => {
	it('renders the basic <Form /> with populated data', () => {
		const { container, getByPlaceholderText, queryByText } = render(
			<Theme>
				<Form>
					<Form.Title>Sign In Now</Form.Title>

					<Form.Base>
						<Form.Input placeholder='Email address' onChange={() => {}} />
						<Form.Input
							type='password'
							placeholder='Password'
							onChange={() => {}}
						/>
						<Form.Submit type='submit' disabled>
							Sign In
						</Form.Submit>

						<Form.Help>
							<div>
								<Form.Input
									type='checkbox'
									name='checkbox'
									id='checkbox'
									data-testid='remember-checkbox'
								/>
								<Form.Label htmlFor='checkbox'>
									<span>Remember me</span>
								</Form.Label>
							</div>
						</Form.Help>
					</Form.Base>

					<Form.Text>
						New to Netflix? <Form.Link to='/signup'>Sign up now.</Form.Link>
					</Form.Text>
					<Form.TextSmall>
						This page is protected by Google reCAPTCHA to ensure you're not a
						bot. Learn more.
					</Form.TextSmall>
				</Form>
			</Theme>
		);

		expect(
			queryByText(
				"This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more."
			)
		).toBeTruthy();
		expect(queryByText('Sign In Now')).toBeTruthy();
		expect(queryByText('Remember me')).toBeTruthy();
		expect(queryByText('Sign In')).toBeTruthy();
		expect(queryByText('Sign In').disabled).toBeTruthy();
		expect(getByPlaceholderText('Password')).toBeTruthy();
		expect(getByPlaceholderText('Email address')).toBeTruthy();
		expect(container.firstChild).toMatchSnapshot();
	});

	it('renders the <Form /> with an error', () => {
		const { container, getByText, queryByText } = render(
			<Form>
				<Form.Error>Your email address is already being used</Form.Error>
				<Form.Submit type='submit'>Sign In</Form.Submit>
			</Form>
		);

		expect(getByText('Your email address is already being used')).toBeTruthy();
		expect(queryByText('Sign In').disabled).toBeFalsy();
		expect(container.firstChild).toMatchSnapshot();
	});

	it('changes style fo div as checkbox is checked/unchecked', () => {
		const { container, getByTestId, queryByText } = render(
			<Theme>
				<Form>
					<Form.Help>
						<div>
							<Form.Input
								type='checkbox'
								name='checkbox'
								id='checkbox'
								data-testid='remember-checkbox'
							/>
							<Form.Label htmlFor='checkbox'>
								<span>Remember me</span>
							</Form.Label>
						</div>
					</Form.Help>
				</Form>
			</Theme>
		);

		expect(queryByText('Remember me')).toBeTruthy();
		expect(getByTestId('remember-checkbox')).toBeTruthy();

		expect(getByTestId('remember-checkbox').checked).toBeFalsy();
		fireEvent.click(getByTestId('remember-checkbox'));
		expect(getByTestId('remember-checkbox').checked).toBeTruthy();
		fireEvent.click(getByTestId('remember-checkbox'));
		expect(getByTestId('remember-checkbox').checked).toBeFalsy();

		expect(container.firstChild).toMatchSnapshot();
	});
});
