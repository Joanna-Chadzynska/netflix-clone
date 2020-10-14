import { render } from '@testing-library/react';
import React from 'react';
import { LoginHelp } from '../../pages';
import Theme from '../../styles/theme';

jest.mock('react-router-dom');

describe('<LoginHelp />', () => {
	it('renders the <LoginHelp /> page', () => {
		const { queryByText } = render(
			<Theme>
				<LoginHelp>login help</LoginHelp>
			</Theme>
		);

		expect(queryByText('login help')).toBeTruthy();
	});
});
