import { Link as ReachRouterLink } from 'react-router-dom';
import styled from 'styled-components/macro';

export const Background = styled.div`
	display: flex;
	flex-direction: column;
	background: url(${({ src }) =>
			src ? `../images/misc/${src}.jpg` : '../images/misc/home-bg.jpg'})
		top left / cover no-repeat;
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
