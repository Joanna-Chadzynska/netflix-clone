import React, { useContext } from 'react';
import { BrowseContainer } from '../containers';
import { FirebaseContext } from '../context/firebase';
import { useContent } from './../hooks';
import { selectionFilter } from './../utils';

const Browse = () => {
	const { series } = useContent('series');
	const { films } = useContent('films');
	const slides = selectionFilter({ series, films });
	const { firebase } = useContext(FirebaseContext);

	return (
		<>
			<BrowseContainer slides={slides} />
			{/* <button onClick={() => firebase.auth().signOut()}>logout</button> */}
		</>
	);
};

export default Browse;
