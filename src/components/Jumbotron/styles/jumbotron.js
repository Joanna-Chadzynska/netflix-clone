import styled from 'styled-components/macro';

export const Item = styled.div`
	display: flex;
	border-bottom: 8px solid #222;
	padding: 50px 5%;
	color: white;
	overflow: hidden;
`;

export const Inner = styled.div`
	display: flex;
	flex-direction: ${({ direction }) => direction};
	align-items: center;
	justify-content: space-between;
	max-width: 1100px;
	margin: auto;
	width: 100%;

	@media (max-width: 1000px) {
		flex-direction: column;
	}
`;

export const Container = styled.div`
	@media (max-width: 1000px) {
		${Item}:last-of-type h2 {
			margin-bottom: 3.125rem;
		}
	}
`;

export const Pane = styled.div`
	width: 50%;

	@media (max-width: 1000px) {
		padding: 0 2.812rem;
		text-align: center;
		width: 100%;
	}
`;

export const Title = styled.h1`
	font-size: 3.125rem;
	line-height: 1.1;
	margin-bottom: 8px;

	@media (max-width: 600px) {
		font-size: 2.187rem;
	}
`;

export const SubTitle = styled.h2`
	font-size: 1.625rem;
	font-weight: normal;
	line-height: normal;

	@media (max-width: 600px) {
		font-size: 1.125rem;
	}
`;

export const Image = styled.img`
	height: auto;
	max-width: 100%;
`;
