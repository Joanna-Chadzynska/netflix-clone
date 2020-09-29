import React, { useContext, useState } from 'react';
import { FirebaseContext } from '../../context/firebase';
import SelectProfile from '../Profiles';

const BrowseContainer = ({ slides }) => {
	const [profile, setProfile] = useState({});
	const { firebase } = useContext(FirebaseContext);
	const user = firebase.auth().currentUser || {};
	return (
		<>
			<SelectProfile user={user} setProfile={setProfile} />
		</>
	);
};

export default BrowseContainer;
