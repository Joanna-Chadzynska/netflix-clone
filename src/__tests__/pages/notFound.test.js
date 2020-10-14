import { render } from '@testing-library/react';
import React from 'react';
import { NotFound } from '../../pages';
import Theme from '../../styles/theme';

jest.mock('react-router-dom');

describe('<NotFound />', () => {
	it('renders the <NotFound /> page', () => {
		const { queryByText } = render(
			<Theme>
				<NotFound>login help</NotFound>
			</Theme>
		);

		expect(
			queryByText(
				"Sorry, we can't find that page. You'll find lots to explore on the home page."
			)
		).toBeTruthy();

		expect(queryByText('Error Code')).toBeTruthy();
		expect(queryByText('Lost in space')).toBeTruthy();
	});
});
