import { render } from '@testing-library/react';
import React from 'react';
import { Jumbotron } from '../../components';
import jumboData from '../../fixtures/jumbo.json';
import Theme from '../../styles/theme';

describe('<Jumbotron/>', () => {
	let getByText, container, getByAltText, getByTestId;
	beforeEach(() => {
		const component = render(
			<Theme>
				<Jumbotron.Container>
					{jumboData.map((jumbo) => (
						<Jumbotron key={jumbo.id} direction={jumbo.direction}>
							<Jumbotron.Pane>
								<Jumbotron.Title>{jumbo.title}</Jumbotron.Title>
								<Jumbotron.SubTitle>{jumbo.subTitle}</Jumbotron.SubTitle>
							</Jumbotron.Pane>

							<Jumbotron.Pane>
								<Jumbotron.Image
									src={jumbo.image}
									alt={jumbo.alt}
									data-testid={`${jumbo.id}-jumbo-image`}
								/>
							</Jumbotron.Pane>
						</Jumbotron>
					))}
				</Jumbotron.Container>
			</Theme>
		);

		getByText = component.getByText;
		container = component.container;
		getByAltText = component.getByAltText;
		getByTestId = component.getByTestId;
	});

	it('renders the basic <Jumbotron /> with populated data', () => {
		expect(getByText('Enjoy on your TV.')).toBeTruthy();
		expect(getByAltText('Tiger King on Netflix')).toBeTruthy();
		expect(getByTestId('1-jumbo-image')).toBeTruthy();
		expect(
			getByText(
				'Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.'
			)
		).toBeTruthy();
		expect(container.firstChild).toMatchSnapshot();
	});
});
