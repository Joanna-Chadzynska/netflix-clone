import styled from 'styled-components/macro';

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
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
	top: 50%;
	left: 1rem;
	transform: translateY(-50%);
	transition: all 0.2s ease-out;

	@media (max-width: 1000px) {
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
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

	&:focus {
		outline: none;
		border-color: #0071eb;
	}

	&:focus + ${Label} {
		font-size: 0.7rem;
		font-weight: bold;
		top: 12px;
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

export const ErrorMessage = styled.p``;
