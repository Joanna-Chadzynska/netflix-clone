import { render } from '@testing-library/react';
import React from 'react';
import { Home } from '../../pages';
import Theme from '../../styles/theme';

jest.mock('react-router-dom');

describe('<Home />', () => {
	it('renders the <Home /> page', () => {
		const { queryByText, getAllByText, getAllByPlaceholderText } = render(
			<Theme>
				<Home />
			</Theme>
		);

		expect(queryByText('Unlimited movies, TV shows, and more.')).toBeTruthy();
		expect(queryByText('Watch anywhere. Cancel anytime.')).toBeTruthy();
		expect(getAllByPlaceholderText('Email address')).toBeTruthy();
		expect(getAllByText('Get started')).toBeTruthy();
		expect(
			getAllByText(
				'Ready to watch? Enter your email to create or restart your membership.'
			)
		).toBeTruthy();
	});
});
