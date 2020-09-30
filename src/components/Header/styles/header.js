import { Link as ReachRouterLink } from 'react-router-dom';
import styled from 'styled-components/macro';

export const Background = styled.div`
	display: flex;
	flex-direction: column;
	background: url(${({ src }) =>
			src ? `../images/misc/${src}.jpg` : '../images/misc/home-bg.jpg'})
		top left / cover no-repeat;

	@media (max-width: 1100px) {
		${({ dontShowOnSmallViewPort }) =>
			dontShowOnSmallViewPort && 'background: none'}
	}
`;

export const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: clamp(45px, 2.5vw, 5rem);
	margin: 0 2.812rem;
	padding-top: 1.25rem;
	max-width: 1920px;

	a {
		display: flex;
	}

	@media (max-width: 1000px) {
		margin: 0 1.875rem;
	}
`;

export const Logo = styled.img`
	height: clamp(1.5rem, 10vw, 2.812rem);
	width: clamp(5.375rem, 12vw, 10.437rem);
	margin-right: 2.5rem;
`;

export const ButtonLink = styled(ReachRouterLink)`
	display: block;
	background-color: ${({ theme }) => theme.colors.red.secondary};
	border: 0;
	border-radius: 3px;
	color: ${({ theme }) => theme.colors.white};
	font-size: clamp(0.875rem, 0.9rem, 1rem);
	padding: 0.43em 1em;
	transition: background-color 0.5s ease;

	&:hover {
		background-color: #fff;
		background-color: ${({ theme }) => theme.colors.red.btnLink};
	}
`;

export const Feature = styled(Container)`
	padding: 150px 0 500px 0;
	flex-direction: column;
	align-items: normal;
	width: 50%;

	/* @media (max-width: 1100px) {
		display: none;
	} */
`;

export const Group = styled.div`
	display: flex;
	align-items: center;
`;

export const Text = styled.p`
	color: white;
	font-size: clamp(1.125rem, 3vw, 2rem);
	line-height: normal;
	text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
`;

export const Link = styled.p`
	color: #fff;
	cursor: pointer;
	text-decoration: none;
	letter-spacing: 2px;
	margin-right: 1.875rem;
	font-weight: ${({ active }) => (active === 'true' ? '700' : 'normal')};
	font-size: clamp(12px, 1.5vw, 16px);
	transition: color 0.4s;

	&:hover {
		color: #b3b3b3;
	}

	&:last-of-type {
		margin-right: 0;
	}
`;

export const FeatureCallOut = styled.h2`
	color: white;
	font-size: clamp(1.625rem, 3vw, 3.125rem);
	line-height: normal;
	font-weight: bold;
	text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
	margin: 0;
`;

export const PlayButton = styled.button`
	box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
	background-color: #e6e6e6;
	color: #000;
	border-width: 0;
	padding: 10px 20px;
	border-radius: 5px;
	max-width: 8.125rem;
	font-weight: bold;
	font-size: clamp(0.75rem, 3vw, 1.375rem);
	margin-top: 10px;
	cursor: pointer;
	transition: background-color 0.5s ease;

	&:hover {
		background-color: #ff1e1e;
		color: white;
	}
`;

export const Picture = styled.button`
	background: url(${({ src }) => src});
	background-size: contain;
	border: 0;
	width: 32px;
	height: 32px;
	cursor: pointer;
`;

export const Dropdown = styled.div`
	display: none;
	background-color: #000;
	position: absolute;
	padding: 10px;
	width: 100px;
	top: 32px;
	right: 10px;

	${Group} {
		margin-bottom: 10px;

		&:last-of-type {
			margin-bottom: 0;
		}

		${Link}:hover {
			text-decoration: underline;
		}
	}

	button {
		margin-right: 10px;
	}

	p {
		font-size: 12px;
		margin-bottom: 0;
		margin-top: 0;
	}
`;

export const Profile = styled.div`
	display: flex;
	align-items: center;
	margin-left: 20px;
	position: relative;

	button {
		cursor: pointer;
	}

	&:hover > ${Dropdown} {
		display: flex;
		flex-direction: column;
	}
`;

export const Search = styled.div`
	display: flex;
	align-items: center;

	svg {
		cursor: pointer;
		color: #fff;
	}

	@media (max-width: 700px) {
		display: none;
	}
`;

export const SearchIcon = styled.button`
	cursor: pointer;
	background-color: transparent;
	border: 0;

	img {
		filter: brightness(0) invert(1);
		width: 16px;
	}
`;

export const SearchInput = styled.input`
	background-color: #44444459;
	color: #fff;
	border: 1px solid #fff;
	height: 30px;
	font-size: 14px;
	margin-left: ${({ active }) => (active ? '10px' : '0')};
	padding: ${({ active }) => (active ? '0 10px' : '0')};
	opacity: ${({ active }) => (active ? '1' : '0')};
	width: ${({ active }) => (active ? '200px' : '0px')};
	transition: width 0.5s;
`;
