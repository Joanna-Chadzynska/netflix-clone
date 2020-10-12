import React from 'react';
import {
	Container,
	Item,
	List,
	Picture,
	Title,
	UserName,
} from './styles/profiles';

const Profiles = ({ children, ...restProps }) => {
	return <Container {...restProps}>{children}</Container>;
};

Profiles.Title = function ProfilesTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};

Profiles.List = function ProfilesList({ children, ...restProps }) {
	return <List {...restProps}>{children}</List>;
};

Profiles.User = function ProfilesUser({ children, ...restProps }) {
	return <Item {...restProps}>{children}</Item>;
};

Profiles.Picture = function ProfilesPicture({ src, ...restProps }) {
	return (
		<Picture
			{...restProps}
			src={src ? `/images/users/${src}.png` : '/images/misc/loading.gif'}
			data-testid='profile-picture'
		/>
	);
};

Profiles.UserName = function ProfilesUserNAme({ children, ...restProps }) {
	return <UserName {...restProps}>{children}</UserName>;
};

export default Profiles;
