import React from 'react';
import {
	Container,
	Curve,
	Fill,
	LetterE,
	LetterF,
	LetterI,
	LetterL,
	LetterN,
	LetterT,
	LetterX,
	Shape,
	Word,
} from './styles/logoAnimation';

const LogoAnimation = ({ children, ...restProps }) => {
	return (
		<Container {...restProps}>
			<Word>
				{children}
				<Curve />
			</Word>
		</Container>
	);
};

LogoAnimation.LetterN = function LogoAnimationLetterN({
	children,

	...restProps
}) {
	return <LetterN {...restProps}>{children}</LetterN>;
};

LogoAnimation.LetterE = function LogoAnimationLetterN({
	children,

	...restProps
}) {
	return <LetterE {...restProps}>{children}</LetterE>;
};

LogoAnimation.LetterT = function LogoAnimationLetterN({
	children,

	...restProps
}) {
	return <LetterT {...restProps}>{children}</LetterT>;
};

LogoAnimation.LetterF = function LogoAnimationLetterN({
	children,

	...restProps
}) {
	return <LetterF {...restProps}>{children}</LetterF>;
};

LogoAnimation.LetterL = function LogoAnimationLetterN({
	children,

	...restProps
}) {
	return <LetterL {...restProps}>{children}</LetterL>;
};

LogoAnimation.LetterI = function LogoAnimationLetterN({
	children,

	...restProps
}) {
	return <LetterI {...restProps}>{children}</LetterI>;
};

LogoAnimation.LetterX = function LogoAnimationLetterN({
	children,

	...restProps
}) {
	return <LetterX {...restProps}>{children}</LetterX>;
};

LogoAnimation.Shape = function LogoAnimationLetter({ children, ...restProps }) {
	return (
		<Shape {...restProps}>
			<Fill />
		</Shape>
	);
};

export default LogoAnimation;
