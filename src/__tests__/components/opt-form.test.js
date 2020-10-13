import { render } from '@testing-library/react';
import React from 'react';
import { OptForm } from '../../components';
import Theme from '../../styles/theme';

describe('<OptForm/>', () => {
	it('renders the basic <OptForm /> with populated data', () => {
		const message = '';
		const errors = {
			email: 'Email is required!',
		};
		const {
			container,
			getByPlaceholderText,
			queryByText,
			getByLabelText,
		} = render(
			<Theme>
				<OptForm>
					<OptForm.Text>
						Ready to watch? Enter your email to create or restart your
						membership.
					</OptForm.Text>

					<OptForm.InputPlacement>
						<OptForm.Input placeholder='Email address' id='email' />

						<OptForm.ErrorMessage>
							{errors.email ? errors.email : message}
						</OptForm.ErrorMessage>

						<OptForm.Label hasErrors htmlFor='email'>
							Email address
						</OptForm.Label>
					</OptForm.InputPlacement>

					<OptForm.Button type='submit'>Get started</OptForm.Button>
					<OptForm.Break />
				</OptForm>
			</Theme>
		);

		expect(queryByText('Get started')).toBeTruthy();
		expect(getByLabelText('Email address')).toBeTruthy();
		expect(
			queryByText(
				'Ready to watch? Enter your email to create or restart your membership.'
			)
		).toBeTruthy();
		expect(getByPlaceholderText('Email address')).toBeTruthy();
		expect(queryByText('Email is required!')).toBeFalsy();
		expect(container.firstChild).toMatchSnapshot();
	});
});
