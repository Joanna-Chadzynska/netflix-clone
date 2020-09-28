import React from 'react';
import { Header } from '../../components';
import * as ROUTES from '../../constants/routes';
import logo from '../../logo.svg';

const HeaderWithLogo = ({ children }) => {
	return (
		<Header>
			<Header.Frame>
				<Header.Logo src={logo} to={ROUTES.HOME} alt='Netflix' />
			</Header.Frame>
			{children}
		</Header>
	);
};

export default HeaderWithLogo;
