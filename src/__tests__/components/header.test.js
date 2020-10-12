import { render } from '@testing-library/react';
import React from 'react';
import { Header } from '../../components';
import Theme from '../../styles/theme';

jest.mock('react-router-dom');

describe('<Header/>', () => {
	it('renders the basic <Header /> with a background', () => {
		const { container, getByText, getByTestId } = render(
			<Theme>
				<Header>
					<Header.Frame>
						<Header.Logo src='/logo.svg' alt='Netflix' />
						<Header.TextLink active='true'>Hello I am a link!</Header.TextLink>
					</Header.Frame>
				</Header>
			</Theme>
		);

		expect(getByText('Hello I am a link!')).toBeTruthy();
		expect(getByTestId('header-bg')).toBeTruthy();
		expect(container.firstChild).toMatchSnapshot();
	});

	it('renders the basic <Header /> without a background', () => {
		const { container, getByText, queryByTestId } = render(
			<Theme>
				<Header bg={false}>
					<Header.Frame>
						<Header.Logo src='/logo.svg' alt='Netflix' />
						<Header.ButtonLink>Sign In</Header.ButtonLink>
						<Header.TextLink active={false}>Hello I am a link!</Header.TextLink>
					</Header.Frame>
				</Header>
			</Theme>
		);

		expect(getByText('Hello I am a link!')).toBeTruthy();
		expect(queryByTestId('header-bg')).toBeFalsy();
		expect(container.firstChild).toMatchSnapshot();
	});
});
