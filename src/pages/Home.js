import React from 'react';
import { Feature, OptForm } from '../components';
import { Faqs, Footer, Header, Jumbotron } from '../containers';

const Home = () => {
	return (
		<>
			<Header>
				<Feature>
					<Feature.Title>Unlimited movies, TV shows, and more.</Feature.Title>
					<Feature.SubTitle>Watch anywhere. Cancel anytime.</Feature.SubTitle>

					<OptForm>
						<OptForm.Text>
							Ready to watch? Enter your email to create or restart your
							membership.
						</OptForm.Text>

						<OptForm.InputPlacement>
							<OptForm.Input
								id='email'
								type='email'
								name='email'
								placeholder='Email address'
							/>
							<OptForm.ErrorMessage />
							<OptForm.Label htmlFor='email'>Email address</OptForm.Label>
						</OptForm.InputPlacement>

						<OptForm.Button type='submit'>Get started</OptForm.Button>
						<OptForm.Break />
					</OptForm>
				</Feature>
			</Header>

			<Jumbotron />
			<Faqs />
			<Footer />
		</>
	);
};

export default Home;
