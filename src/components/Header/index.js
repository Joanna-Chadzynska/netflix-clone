import React, { useEffect, useState } from 'react';
import { Link as ReachRouterLink } from 'react-router-dom';
import { useClickOutside } from './../../hooks';
import {
	Background,
	ButtonLink,
	Container,
	Dropdown,
	Feature,
	FeatureCallOut,
	Group,
	Link,
	Logo,
	Picture,
	PlayButton,
	Profile,
	Search,
	SearchIcon,
	SearchInput,
	Text,
} from './styles/header';

const Header = ({ bg = true, children, ...restProps }) => {
	return bg ? <Background {...restProps}>{children}</Background> : children;
};

Header.Feature = function HeaderFeature({ children, ...restProps }) {
	return <Feature {...restProps}>{children}</Feature>;
};

Header.Frame = function HeaderFrame({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
};

Header.Group = function HeaderGroup({ children, ...restProps }) {
	return <Group {...restProps}>{children}</Group>;
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
	return (
		<ReachRouterLink to={to}>
			<Logo {...restProps} />
		</ReachRouterLink>
	);
};

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
	return <ButtonLink {...restProps}>{children}</ButtonLink>;
};

Header.PlayButton = function HeaderPlayButton({ children, ...restProps }) {
	return <PlayButton {...restProps}>{children}</PlayButton>;
};

Header.Text = function HeaderText({ children, ...restProps }) {
	return <Text {...restProps}>{children}</Text>;
};

Header.TextLink = function HeaderTextLink({ children, ...restProps }) {
	return <Link {...restProps}>{children}</Link>;
};

Header.FeatureCallOut = function HeaderFeatureCallOut({
	children,
	...restProps
}) {
	return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>;
};

Header.Profile = function HeaderProfile({ children, ...restProps }) {
	return <Profile {...restProps}>{children}</Profile>;
};

Header.Picture = function HeaderPicture({ src, ...restProps }) {
	return <Picture src={`/images/users/${src}.png`} {...restProps} />;
};

Header.Dropdown = function HeaderDropdown({ src, ...restProps }) {
	return <Dropdown src={`/images/users/${src}.png`} {...restProps} />;
};

Header.Search = function HeaderSearch({
	searchTerm,
	setSearchTerm,
	...restProps
}) {
	const { ref, clickOutside } = useClickOutside();
	const [searchActive, setSearchActive] = useState(false);
	const handleClickActive = () => setSearchActive(!searchActive);

	useEffect(() => {
		if (clickOutside) {
			setSearchActive(false);
		}
	}, [clickOutside]);

	return (
		<Search {...restProps} ref={ref}>
			<SearchIcon onClick={handleClickActive}>
				<img src='/images/icons/search.png' alt='Search' />
			</SearchIcon>
			<SearchInput
				type='search'
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value)}
				placeholder='Search films and series'
				active={searchActive}
			/>
		</Search>
	);
};

export default Header;
