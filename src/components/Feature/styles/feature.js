import styled from 'styled-components/macro';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	border-bottom: 8px solid #222;
	text-align: center;
	padding: 10.312rem 2.812rem;
`;

export const Title = styled.h1`
	color: white;
	max-width: 40rem;
	font-size: clamp(1.75rem, 3vw, 4rem);
	font-weight: bold;
	line-height: 1.1;
	margin: auto;
`;

export const SubTitle = styled.h2`
	color: white;
	font-size: clamp(1.125rem, 1.5vw, 1.625rem);
	font-weight: normal;
	margin: 1rem auto;
`;
