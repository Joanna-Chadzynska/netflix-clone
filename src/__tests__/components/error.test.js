import { render } from '@testing-library/react';
import React from 'react';
import { Error } from '../../components';
import Theme from '../../styles/theme';

jest.mock('react-router-dom');

describe('<Error/>', () => {
	it('renders component <Error/> with populated data', () => {
		const { container, queryByText } = render(
			<Theme>
				<Error>
					<Error.Inner>
						<Error.Title>Lost your way?.</Error.Title>
						<Error.Content>
							<Error.SubTitle>
								Sorry, we can't find that page. You'll find lots to explore on
								the home page.
							</Error.SubTitle>
							<Error.ButtonLink to='/Home'>Netflix Home</Error.ButtonLink>
							<Error.Code>
								<span>
									Error Code <strong>NSES-404</strong>
								</span>
							</Error.Code>
						</Error.Content>
					</Error.Inner>

					<Error.ImageSource>
						<span>
							From <strong>Lost in space</strong>
						</span>
					</Error.ImageSource>

					<Error.RequestInfo>
						<p>Build Identifier: v6591ee28</p>
						<p>Instance: i-0e688907957decfb8</p>
						<p>Request Id: d2a05002-4b20-48c4-b28c-a0529bc7f2f2-240198057</p>
					</Error.RequestInfo>
				</Error>
			</Theme>
		);

		expect(
			queryByText(
				"Sorry, we can't find that page. You'll find lots to explore on the home page."
			)
		).toBeTruthy();
		expect(queryByText('Lost your way?.')).toBeTruthy();
		expect(queryByText('Lost in space')).toBeTruthy();
		expect(container.firstChild).toMatchSnapshot();
	});
});
