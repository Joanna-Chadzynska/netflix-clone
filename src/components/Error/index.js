import React from 'react';
import {
	Background,
	ButtonLink,
	Code,
	Container,
	Content,
	ImageSource,
	Inner,
	RequestInfo,
	SubTitle,
	Title,
} from './styles/error';

const Error = ({ children, ...restProps }) => {
	return (
		<Background>
			<Container {...restProps}>{children}</Container>
		</Background>
	);
};

Error.Inner = function ErrorInner({ children, ...restProps }) {
	return <Inner {...restProps}>{children}</Inner>;
};

Error.Content = function ErrorContent({ children, ...restProps }) {
	return <Content {...restProps}>{children}</Content>;
};

Error.Title = function ErrorTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};

Error.SubTitle = function ErrorSubTitle({ children, ...restProps }) {
	return <SubTitle {...restProps}>{children}</SubTitle>;
};

Error.ButtonLink = function ErrorButtonLink({ children, ...restProps }) {
	return <ButtonLink {...restProps}>{children}</ButtonLink>;
};

Error.Code = function ErrorCode({ children, ...restProps }) {
	return <Code {...restProps}>{children}</Code>;
};

Error.ImageSource = function ErrorImageSource({ children, ...restProps }) {
	return <ImageSource {...restProps}>{children}</ImageSource>;
};

Error.RequestInfo = function ErrorRequestInfo({ children, ...restProps }) {
	return <RequestInfo {...restProps}>{children}</RequestInfo>;
};

export default Error;
