import styled from 'styled-components/macro';

export const Container = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: auto;
	max-width: 80%;
`;

export const Title = styled.h1`
	color: ${({ theme }) => theme.colors.white};
	font-size: clamp(1.875rem, 3.5vw, 3.75rem);
	font-weight: 500;
	width: 100%;
	text-align: center;
`;

export const List = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;
	margin: 2em 0;
`;

export const UserName = styled.span`
	display: block;
	color: #808080;
	font-size: clamp(0.9rem, 2vw, 1.5rem);
	line-height: 1.2em;
	min-height: 1.8em;
	text-overflow: ellipsis;
	text-align: center;
	margin: 0.6em 0;
	overflow: hidden;
`;

export const Picture = styled.img`
	border-radius: 4px;
	border: none;
	box-sizing: border-box;
	cursor: pointer;
	width: 100%;
	max-width: 150px;
	height: auto;
`;

export const Item = styled.li`
	max-height: 200px;
	max-width: 200px;
	min-height: 84px;
	min-width: 84px;
	text-align: center;
	margin-right: 30px;

	&:hover > ${Picture} {
		border: 0.3em solid #fff;
	}

	&:hover > ${UserName} {
		font-weight: bold;
		color: #fff;
	}

	&:last-of-type {
		margin-right: 0;
	}
`;
