import { Link as ReachRouterLink } from 'react-router-dom';
import styled from 'styled-components/macro';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;
	width: 100vw;
`;

export const Inner = styled.div`
	color: ${({ theme }) => theme.colors.white};
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0 1em;
	flex: 2 0;
	position: relative;
	user-select: none;

	&::before,
	&::after {
		content: '';
		display: flex;
		flex: 1;
		max-height: 25%;
	}
`;

export const Background = styled.div`
	background: radial-gradient(rgb(0 0 0 / 45%), rgb(0 0 0 / 0%)),
		url('/images/misc/bg-lost-in-space.png');
	background-attachment: fixed;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
`;

export const Title = styled.h1`
	font-size: clamp(0.875rem, 5vw, 4.75rem);
	font-weight: 700;
	margin-bottom: 2vw;
	margin-top: 0;
	text-shadow: 0 1px 2px rgba(0, 0, 0, 0.57);
	text-align: center;
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	margin: 0 auto;
	padding-bottom: 2em;
	text-align: center;
	width: 50vw;
`;

export const SubTitle = styled.p`
	font-size: clamp(0.75rem, 2vw, 1.75rem);
	font-weight: 300;
	margin-top: 0;
	text-shadow: 0 1px 2px rgba(0, 0, 0, 0.57);
`;

export const ButtonLink = styled(ReachRouterLink)`
	align-self: center;
	background-color: ${({ theme }) => theme.colors.white};
	border: 0;
	border-radius: 4px;
	color: ${({ theme }) => theme.colors.black};
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: clamp(0.75rem, 1.8vw, 1.25rem);
	font-weight: bold;
	padding: 0.8em 1.6em;
	white-space: nowrap;
	word-break: break word;
	user-select: none;
	-webkit-font-smoothing: antialiased;
	position: relative;

	&:focus {
		outline: none;
	}

	&:not(:disabled):focus::before {
		box-sizing: content-box;
		content: '';
		display: block;
		height: 100%;
		width: 100%;
		border: 2px solid white;
		border-radius: 8px;
		padding: 2px;
		position: absolute;
		left: -4px;
		top: -4px;
	}

	&:hover {
		opacity: 0.7;
	}
`;

export const Code = styled.div`
	display: flex;
	flex: 1;
	justify-content: center;
	margin-top: 2em;
	align-items: flex-end;

	span {
		border-left: 2px solid ${({ theme }) => theme.colors.red.secondary};
		font-size: clamp(0.75rem, 2vw, 2rem);
		font-weight: 100;
		letter-spacing: 0.1em;
		line-height: 2.2em;
		padding: 0 1vw;

		strong {
			font-weight: 700;
		}
	}
`;

export const ImageSource = styled.span`
	color: rgba(229, 229, 229, 0.57);
	font-size: clamp(0.75rem, 1.5vw, 1.125rem);
	font-weight: 100;
	letter-spacing: 0.1em;
	line-height: 1.5vw;
	margin: 2.5vw 4.8vw;
	position: fixed;
	bottom: 0;
	right: 0;
	text-shadow: 0 1px 2px rgba(0, 0, 0, 0.57);
	text-transform: uppercase;

	strong {
		color: rgba(229, 229, 229, 0.77);
		font-weight: 700;
		letter-spacing: normal;
		margin-left: 0.2em;
	}
`;

export const RequestInfo = styled.div`
	bottom: 0;
	color: transparent;
	left: 0;
	margin: 2.5vw 4.8vw;
	position: fixed;
`;
