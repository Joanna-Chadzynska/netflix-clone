import { render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { BrowseContainer } from '../../containers';
import { FirebaseContext } from '../../context/firebase';
import Theme from '../../styles/theme';
import { selectionFilter } from './../../utils';

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useHistory: () => ({}),
}));

jest.mock('../../utils', () => ({
	selectionFilter: () => ({
		series: [
			{
				title: 'Documentaries',
				data: [
					{
						id: 'series-1x',
						title: 'Tiger King',
						description:
							'An exploration of big cat breeding and its bizarre underworld, populated by eccentric characters.',
						genre: 'documentaries',
						maturity: '18',
						slug: 'tiger-king',
					},
				],
			},
		],
		films: [
			{
				title: 'Suspense',
				data: [
					{
						id: 'film-1x',
						title: 'Amanda Knox',
						description:
							'Amanda Marie Knox is an American woman who spent almost four years in an Italian prison.',
						genre: 'documentaries',
						maturity: '12',
						slug: 'amanda-knox',
					},
				],
			},
		],
	}),
}));

const firebase = {
	auth: jest.fn(() => ({
		currentUser: {
			displayName: 'Karl',
			photoURL: 1,
			email: 'karlhadwen@gmail.com',
		},
		signOut: jest.fn(() => Promise.resolve('I am signed out!')),
	})),
	firestore: jest.fn(() => ({
		collection: jest.fn(() => ({
			get: jest.fn(() => Promise.resolve('I get content!')),
			add: jest.fn(() => Promise.resolve('I add content!')),
		})),
	})),
};

describe('<BrowseContainer />', () => {
	const series = [
		{
			title: 'Documentaries',
			data: [
				{
					id: 'series-1x',
					title: 'Tiger King',
					description:
						'An exploration of big cat breeding and its bizarre underworld, populated by eccentric characters.',
					genre: 'documentaries',
					maturity: '18',
					slug: 'tiger-king',
				},
			],
		},
	];
	const films = [
		{
			id: 'film-1x',
			title: 'The Prestige',
			description: 'Great film...',
			genre: 'drama',
			maturity: '15',
			slug: 'the-prestige',
		},
	];

	const slides = selectionFilter({ series, films });

	it('renders the <BrowseContainer />', () => {
		const user = { displayName: 'Karl', photoURL: 'profile.png' };

		const { getByTestId } = render(
			<Theme>
				<Router>
					<FirebaseContext.Provider value={{ firebase }}>
						<BrowseContainer slides={slides} />
					</FirebaseContext.Provider>
				</Router>
			</Theme>
		);

		// fireEvent.click(getByTestId('user-profile'));
		// expect(setProfile).toHaveBeenCalled();
	});
});
