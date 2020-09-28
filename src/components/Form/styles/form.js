import { Link as ReachRouterLink } from 'react-router-dom';
import styled from 'styled-components/macro';

export const Container = styled.div`
	background-color: #000;
	border-bottom: 1px solid #999;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	min-height: 34.375rem;
	padding: 20px 5% 30px 5%;
	margin: auto;
	width: 100%;

	@media (min-width: 740px) {
		background-color: rgba(0, 0, 0, 0.75);
		border: 0;
		border-radius: 5px;
		margin-bottom: 6.25rem;
		min-height: 41.25rem;
		max-width: 28.125rem;
		padding: 3.75rem 4.25rem 2.5rem;
	}
`;

export const Base = styled.form`
	display: flex;
	flex-direction: column;
	max-width: 100%;
	width: 100%;

	@media (min-width: 740px) {
		max-width: 450px;
		width: 100%;
	}
`;

export const Error = styled.div`
	background: #e87c03;
	border-radius: 4px;
	font-size: 14px;
	margin: 0 0 16px;
	color: white;
	padding: 15px 20px;
`;

export const Title = styled.h1`
	color: ${({ theme }) => theme.colors.white};
	font-size: 2rem;
	font-weight: 700;
	margin-bottom: 1.75rem;
`;

export const Text = styled.p`
	color: #737373;
	font-size: 1rem;
	font-weight: 500;
`;

export const TextSmall = styled.p`
	margin-top: 10px;
	font-size: 13px;
	line-height: normal;
	color: #8c8c8c;
`;

export const Help = styled.div`
	font-size: 0.812rem;
	display: flex;
	justify-content: space-between;
	align-items: center;

	div {
		display: inline-block;
		position: relative;
		padding-left: 20px;
		margin-bottom: -5px;
	}
`;

export const Input = styled.input`
	background: #333;
	border-radius: 4px;
	border: 0;
	color: #fff;
	line-height: 50px;
	margin-bottom: 1rem;
	padding: 6px 20px 0;

	&::placeholder {
		color: #999;
	}

	&[type='checkbox'] {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		margin-right: 10px;
		position: absolute;
		top: 0;
		left: 0;
		opacity: 0;
	}
`;

export const Label = styled.label`
	color: #999;
	margin-bottom: -5px;
	input[type='checkbox'] + label {
		/* color: #333; */
		padding: 0;
		display: block;
		line-height: 1.2;
		position: relative;
	}

	span {
		margin-bottom: -10px;
		margin-left: 5px;
		&::before {
			content: '';
			background: #e6e6e6;
			border-radius: 2px;
			position: absolute;
			display: block;
			top: 0;
			left: 0;
			height: 1rem;
			width: 1rem;
			padding: 0;
		}

		input[type='checkbox']:checked&::after {
			content: '4';
			color: red;
			position: absolute;
			font-size: 1rem;
			top: 2px;
			left: -21px;
		}
	}
`;

export const Submit = styled.button`
	background: #e50914;
	border: 0;
	border-radius: 4px;
	color: #fff;
	font-weight: bold;
	font-size: 1rem;
	margin: 1.5rem 0 0.75rem;
	padding: 1em;

	&:disabled {
		opacity: 0.5;
	}
`;

export const Link = styled(ReachRouterLink)`
	color: ${({ theme }) => theme.colors.white};

	&:hover {
		text-decoration: underline;
	}
`;
