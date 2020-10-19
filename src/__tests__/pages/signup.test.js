import { act, fireEvent, render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { FirebaseContext } from '../../context/firebase';
import { SignUp } from '../../pages';
import Theme from '../../styles/theme';

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useHistory: () => ({}),
}));

const firebase = {
	auth: jest.fn(() => ({
		createUserWithEmailAndPassword: jest.fn(() =>
			Promise.resolve({
				user: {
					updateProfile: jest.fn(() => Promise.resolve('I am signed up!')),
				},
			})
		),
	})),
};

describe('<SignUp />', () => {
	it('renders the sign up page with a form submission', async () => {
		const { getByTestId, getByPlaceholderText, queryByTestId, debug } = render(
			<Router>
				<FirebaseContext.Provider value={{ firebase }}>
					<Theme>
						<SignUp />
					</Theme>
				</FirebaseContext.Provider>
			</Router>
		);

		await act(async () => {
			await fireEvent.change(getByPlaceholderText('First Name'), {
				target: { value: 'Karl' },
			});
			await expect(queryByTestId('error-name')).toBeFalsy();

			await fireEvent.change(getByPlaceholderText('Email or phone number'), {
				target: { value: 'karl@gmail.com' },
			});
			await expect(queryByTestId('error-email')).toBeFalsy();

			await fireEvent.change(getByPlaceholderText('Password'), {
				target: { value: 'password' },
			});
			await expect(queryByTestId('error-password')).toBeFalsy();

			fireEvent.click(getByTestId('sign-up'));

			expect(getByPlaceholderText('Email or phone number').value).toBe(
				'karl@gmail.com'
			);
			expect(getByPlaceholderText('Password').value).toBe('password');
			expect(queryByTestId('error')).toBeFalsy();
		});
	});
});
