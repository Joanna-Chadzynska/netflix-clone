import React from 'react';
import { Profiles } from '../../components';
import { HeaderWithLogo } from '../index';

const SelectProfile = ({ user, setProfile }) => {
	return (
		<>
			<HeaderWithLogo bg={false} />
			<Profiles>
				<Profiles.Title>Who's watching?</Profiles.Title>
				<Profiles.List>
					<Profiles.User>
						<Profiles.Picture src={user.photoURL} />
						<Profiles.UserName>{user.displayName}</Profiles.UserName>
					</Profiles.User>
				</Profiles.List>
			</Profiles>
		</>
	);
};

export default SelectProfile;
