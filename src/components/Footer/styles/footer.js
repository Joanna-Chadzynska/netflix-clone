import styled from 'styled-components/macro';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	margin: auto;
	max-width: 1000px;
	padding: 4.375rem 3.5rem;

	@media (max-width: 1000px) {
		padding: 4.375rem 1.875rem;
	}
`;

export const Row = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
	grid-gap: 0.937rem;

	@media (max-width: 1000px) {
		grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
	}
`;

export const Column = styled.div`
	display: flex;
	flex-direction: column;
	text-align: left;
`;

export const Link = styled.a`
	color: ${({ theme }) => theme.colors.gray.light};
	font-size: 0.875rem;
	margin-bottom: 1.25rem;
`;

export const Title = styled.p`
	color: ${({ theme }) => theme.colors.gray.light};
	font-size: 1rem;
	margin-bottom: 2.5rem;
`;

export const Text = styled.p`
	color: ${({ theme }) => theme.colors.gray.light};
	font-size: 0.812rem;
	margin-bottom: 2.5rem;
`;

export const Break = styled.div`
	flex-basis: 100%;
	height: 0;
`;
