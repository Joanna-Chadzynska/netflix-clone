import { act, fireEvent, render } from '@testing-library/react';
import React from 'react';
// import { act } from 'react-dom/test-utils';
import { BrowserRouter as Router } from 'react-router-dom';
import { FirebaseContext } from '../../context/firebase';
import { SignIn } from '../../pages';
import Theme from '../../styles/theme';

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useHistory: () => ({}),
}));

const firebase = {
	auth: jest.fn(() => ({
		signInWithEmailAndPassword: jest.fn(() =>
			Promise.resolve('I am signed in!')
		),
	})),
};

describe('<SignIn />', () => {
	it('renders the sign in page with a form submission', async () => {
		const { getByTestId, getByPlaceholderText, queryByTestId } = render(
			<Router>
				<FirebaseContext.Provider value={{ firebase }}>
					<Theme>
						<SignIn />
					</Theme>
				</FirebaseContext.Provider>
			</Router>
		);

		await act(async () => {
			await fireEvent.change(getByPlaceholderText('Email or phone number'), {
				target: { value: 'karl@gmail.com' },
			});
			await fireEvent.change(getByPlaceholderText('Password'), {
				target: { value: 'password' },
			});
			fireEvent.click(getByTestId('sign-in'));
			expect(getByPlaceholderText('Email or phone number').value).toBe(
				'karl@gmail.com'
			);
			// expect(getByPlaceholderText('Password').value).toBe('password');
			expect(queryByTestId('error')).toBeFalsy();
			expect(queryByTestId('error-email')).toBeFalsy();
		});
	});
});
