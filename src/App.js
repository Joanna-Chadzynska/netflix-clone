import React from 'react';
import jumboData from './fixtures/jumbo.json';
import { Jumbotron } from './components';

const App = () => {
	return (
		<div className='App'>
			<Jumbotron.Container>
				{jumboData.map((jumbo) => (
					<Jumbotron key={jumbo.id} direction={jumbo.direction}>
						<Jumbotron.Pane>
							<Jumbotron.Title>{jumbo.title}</Jumbotron.Title>
							<Jumbotron.SubTitle>{jumbo.subTitle}</Jumbotron.SubTitle>
						</Jumbotron.Pane>

						<Jumbotron.Pane>
							<Jumbotron.Image src={jumbo.image} alt={jumbo.alt} />
						</Jumbotron.Pane>
					</Jumbotron>
				))}
			</Jumbotron.Container>
		</div>
	);
};

export default App;
