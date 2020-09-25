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

export const LanguagePicker = styled.div`
	max-width: 150px;
`;

export const LanguageLabel = styled.label`
	margin-bottom: 0;
	font-size: 0.875rem;
	width: 100%;
`;

export const LanguageSelectContainer = styled.div`
	border: 1px solid #333;
	cursor: pointer;
	position: relative;
	width: 100%;

	&::after {
		content: '';
		background-color: #999;
		width: 0.8em;
		height: 0.5em;
		clip-path: polygon(100% 0%, 0 0%, 50% 100%);
		position: absolute;
		top: 50%;
		right: 0.625rem;
		transform: translateY(-50%);
	}

	&::before {
		content: '';
		background-color: #999;
		width: 0.8em;
		height: 0.8em;
		clip-path: circle(50% at 50% 50%);
		position: absolute;
		top: 50%;
		left: 0.7rem;
		transform: translateY(-50%);
	}
`;

export const SelectOpt = styled.select`
	appearance: none;
	background-color: transparent;
	border: none;
	color: #999;
	cursor: inherit;
	font-size: 1rem;
	padding: 0.75rem 1.625rem 0.75rem 3.125rem;

	z-index: 1;

	&::-ms-expand {
		display: none;
	}

	outline: none;
`;

export const LanguageOpt = styled.option`
	font-weight: normal;
	display: block;
	white-space: pre;
	min-height: 1.2em;
	/* padding: 0px 2px 1px; */
`;
