import styled from 'styled-components/macro';

export const Container = styled.div`
	display: flex;
	border-bottom: 8px solid #222;
`;

export const Inner = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 815px;
	margin: 1em auto;
	padding: 0;
	width: 100%;
`;

export const Title = styled.h1`
	color: #fff;
	font-size: clamp(2.187rem, 2.5vw, 3.125rem);
	line-height: 1.1;
	margin-top: 1em;
	margin-bottom: 8px;
	text-align: center;

	@media (max-width: 600px) {
		font-size: 2.187rem;
	}
`;

export const Frame = styled.div`
	margin-bottom: 2.5rem;
	margin-top: 2.5rem;
`;

export const Item = styled.div`
	color: #fff;
	margin: auto;
	margin-bottom: 8px;
	max-width: 670px;
	width: 100%;
`;

export const Header = styled.div`
	align-items: center;
	background-color: #303030;
	cursor: pointer;
	display: flex;
	font-size: clamp(1.25rem, 2vw, 2rem);
	font-weight: normal;
	justify-content: space-between;
	margin-bottom: 1px;
	padding: 0.8em 1.2em;
	user-select: none;

	img {
		filter: brightness(0) invert(1);
		width: 24px;

		@media (min-width: 600px) {
			width: 1rem;
		}
	}
`;

export const Body = styled.div`
	background-color: #303030;
	font-size: clamp(1.25rem, 2vw, 2rem);
	font-weight: normal;
	line-height: normal;
	margin-bottom: 10px;
	max-height: ${({ toggleShow }) => (toggleShow ? '1200px' : '0px')};
	padding: 0.8em 2.2em 0.8em 1.2em;
	transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
	white-space: pre-wrap;
	user-select: none;

	@media (max-width: 600px) {
		line-height: 22px;
	}
`;
