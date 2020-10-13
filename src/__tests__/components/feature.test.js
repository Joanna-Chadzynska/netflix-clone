import { render } from '@testing-library/react';
import React from 'react';
import { Feature } from '../../components';
import Theme from '../../styles/theme';

describe('<Feature/>', () => {
	let getByText, container;
	beforeEach(() => {
		const component = render(
			<Theme>
				<Feature>
					<Feature.Title>Unlimited movies, TV shows, and more.</Feature.Title>
					<Feature.SubTitle>Watch anywhere. Cancel anytime.</Feature.SubTitle>
				</Feature>
			</Theme>
		);

		getByText = component.getByText;
		container = component.container;
	});

	it('renders the basic <Feature /> with populated data', () => {
		expect(getByText('Unlimited movies, TV shows, and more.')).toBeTruthy();
		expect(getByText('Watch anywhere. Cancel anytime.')).toBeTruthy();
		expect(container.firstChild).toMatchSnapshot();
	});
});
