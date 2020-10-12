import React from 'react';
import {
	Break,
	Column,
	Container,
	LanguageOpt,
	LanguagePicker,
	LanguageSelectContainer,
	Link,
	Row,
	SelectOpt,
	Text,
	Title,
} from './styles/footer';

const Footer = ({ children, ...restProps }) => {
	return <Container {...restProps}>{children}</Container>;
};

Footer.Row = function FooterRow({ children, ...restProps }) {
	return <Row {...restProps}>{children}</Row>;
};

Footer.Column = function FooterColumn({ children, ...restProps }) {
	return <Column {...restProps}>{children}</Column>;
};

Footer.Link = function FooterLink({ children, ...restProps }) {
	return <Link {...restProps}>{children}</Link>;
};

Footer.Title = function FooterTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};

Footer.Text = function FooterText({ children, ...restProps }) {
	return <Text {...restProps}>{children}</Text>;
};

Footer.Break = function FooterBreak({ ...restProps }) {
	return <Break {...restProps} />;
};

Footer.LanguagePicker = function FooterLanguagePicker({ ...restProps }) {
	return <LanguagePicker {...restProps} />;
};

Footer.LanguageSelectContainer = function FooterLanguageSelectContainer({
	...restProps
}) {
	return <LanguageSelectContainer {...restProps} />;
};

Footer.Select = function FooterSelect({ ...restProps }) {
	return <SelectOpt {...restProps} data-testid='select' />;
};

Footer.LanguageOpt = function FooterLanguageOpt({ value, ...restProps }) {
	return (
		<LanguageOpt {...restProps} data-testid='select-option' value={value} />
	);
};

export default Footer;
