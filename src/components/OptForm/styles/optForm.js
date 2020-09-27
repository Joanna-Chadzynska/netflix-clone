import styled from 'styled-components/macro';

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	padding-bottom: 3.125rem;
`;

export const Inner = styled.form`
	display: flex;
	justify-content: center;
	flex-direction: row;
	height: 100%;
	margin-top: 20px;
	flex-wrap: wrap;
	width: 100%;

	@media (max-width: 1000px) {
		flex-direction: column;
		align-items: center;
		gap: ${({ hasErrors }) => (hasErrors ? '1rem' : '0')};
	}
`;

export const Text = styled.p`
	align-self: center;
	color: ${({ theme }) => theme.colors.white};
	font-size: clamp(1.5rem, 1.5vw, 1rem);
	line-height: 22px;
	margin: 0 auto;
	padding-bottom: 20px;
	text-align: center;

	@media (min-width: 600px) {
		line-height: normal;
	}
`;

export const Button = styled.button`
	display: flex;
	align-items: center;
	background: ${({ theme }) => theme.colors.red.secondary};
	border-radius: 2px;
	border: 0;
	color: ${({ theme }) => theme.colors.white};
	cursor: pointer;
	flex: 1 0 auto;
	font-size: clamp(1rem, 2vw, 1.625rem);
	font-weight: bold;
	height: 100%;
	height: 3.75rem;
	text-transform: uppercase;
	padding: 0 2em;

	img {
		margin-left: 10px;
		filter: brightness(0) invert(1);
		width: 1.5rem;

		@media (max-width: 1000px) {
			width: 16px;
		}
	}

	&:hover {
		background: ${({ theme }) => theme.colors.red.btnLink};
	}

	@media (max-width: 1000px) {
		height: 3.125rem;
		margin-top: 20px;
		font-weight: bold;
	}
`;

export const Label = styled.label`
	color: #999;
	position: absolute;
	top: ${({ hasErrors }) => (hasErrors ? '10px' : '0')};
	left: ${({ hasErrors }) => (hasErrors ? '10px' : '0')};
	user-select: none;
	transform: ${({ hasErrors }) =>
		hasErrors && 'translate(1%, -10%) scale(0.8)'};
	transition: transform 0.25s, opacity 0.25s ease-in-out;
	transform-origin: 0 0;
	opacity: 0.5;

	@media (min-width: 568px) {
		/* left: 1rem; */
	}
`;

export const Input = styled.input`
	border-radius: 2px;
	border: 2px solid transparent;
	box-sizing: border-box;
	height: 3.75rem;
	max-width: 500px;
	padding: 10px;
	width: 100%;
	margin-bottom: 3rem;

	&:focus {
		outline: none;
		box-shadow: 0;
	}

	&::placeholder {
		color: transparent;
	}

	&,
	& + ${Label} {
		line-height: 1;
		font: inherit;
		padding: 1.5em;
		height: 4em;
	}

	&:focus,
	&:not(:placeholder-shown) {
		border-color: #0071eb;
		& + ${Label} {
			transform: translate(1%, -10%) scale(0.8);
		}
	}

	&:valid {
		&:not(:placeholder-shown) {
			border-color: ${({ theme }) => theme.colors.green.primary};
		}
	}

	&:invalid {
		border-color: ${({ theme }) => theme.colors.orange.secondary};
	}

	@media (min-width: 1000px) {
		height: 60px;
	}
`;

export const InputPlacement = styled.div`
	display: flex;
	justify-content: center;
	position: relative;
	flex: 1 0 auto;
	align-self: stretch;
	width: 57%;
	height: 60px;

	@media (max-width: 1000px) {
		width: 100%;
		height: 3.125rem;
	}
`;

export const Break = styled.div`
	flex-basis: 100%;
	height: 0;
`;

export const ErrorMessage = styled.p`
	color: ${({ theme }) => theme.colors.orange.secondary};
	font-size: 0.9rem;
	margin-bottom: -6px;
	padding: 6px 3px;
	text-align: left;
	position: absolute;
	bottom: -1.5rem;
	left: 0;

	@media (max-width: 1000px) {
		bottom: -1rem;
	}
`;
