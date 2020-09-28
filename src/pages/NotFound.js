import React from 'react';
import { Error, Header } from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';

const NotFound = () => {
	return (
		<Error>
			<Header style={{ background: '#000' }}>
				<Header.Frame>
					<Header.Logo src={logo} to={ROUTES.HOME} alt='Netflix' />
				</Header.Frame>
				<br />
			</Header>
			<Error.Inner>
				<Error.Title>Lost your way?.</Error.Title>
				<Error.Content>
					<Error.SubTitle>
						Sorry, we can't find that page. You'll find lots to explore on the
						home page.
					</Error.SubTitle>
					<Error.ButtonLink to={ROUTES.HOME}>Netflix Home</Error.ButtonLink>
					<Error.Code>
						<span>
							Error Code <strong>NSES-404</strong>
						</span>
					</Error.Code>
				</Error.Content>
			</Error.Inner>

			<Error.ImageSource>
				<span>
					From <strong>Lost in space</strong>
				</span>
			</Error.ImageSource>

			<Error.RequestInfo>
				<p>Build Identifier: v6591ee28</p>
				<p>Instance: i-0e688907957decfb8</p>
				<p>Request Id: d2a05002-4b20-48c4-b28c-a0529bc7f2f2-240198057</p>
			</Error.RequestInfo>
		</Error>
	);
};

export default NotFound;
