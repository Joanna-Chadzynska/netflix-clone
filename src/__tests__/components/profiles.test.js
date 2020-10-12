import { render } from '@testing-library/react';
import React from 'react';
import { Profiles } from '../../components';
import Theme from '../../styles/theme';

describe('<Profiles/>', () => {
	it('renders the basic <Profiles /> with populated data', () => {
		const { container, getByText, getByTestId } = render(
			<Theme>
				<Profiles>
					<Profiles.Title>Who's watching?</Profiles.Title>
					<Profiles.List>
						<Profiles.User onClick={() => {}}>
							<Profiles.Picture src='/images/karl.png' />
							<Profiles.UserName>Karl</Profiles.UserName>
						</Profiles.User>
					</Profiles.List>
				</Profiles>
			</Theme>
		);

		expect(getByText("Who's watching?"));
		expect(getByTestId('profile-picture')).toBeTruthy();
		expect(getByText('Karl'));

		expect(container.firstChild).toMatchSnapshot();
	});
});
