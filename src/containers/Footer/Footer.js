import React, { useState } from 'react';
import { Footer } from '../../components';

const FooterContainer = () => {
	const [lang, setLang] = useState('en');
	const handleChangeLanguage = (e) => setLang(e.target.value);

	return (
		<Footer>
			<Footer.Title>Questions? Contact us.</Footer.Title>
			<Footer.Break />
			<Footer.Row>
				<Footer.Column>
					<Footer.Link href='#'>FAQ</Footer.Link>
					<Footer.Link href='#'>Investor Relations</Footer.Link>
					<Footer.Link href='#'>Ways to Watch</Footer.Link>
					<Footer.Link href='#'>Corporate Information</Footer.Link>
					<Footer.Link href='#'>Netflix Originals</Footer.Link>
				</Footer.Column>
				<Footer.Column>
					<Footer.Link href='#'>Help Center</Footer.Link>
					<Footer.Link href='#'>Jobs</Footer.Link>
					<Footer.Link href='#'>Terms of Use</Footer.Link>
					<Footer.Link href='#'>Contact Us</Footer.Link>
				</Footer.Column>
				<Footer.Column>
					<Footer.Link href='#'>Account</Footer.Link>
					<Footer.Link href='#'>Redeem Gift Cards</Footer.Link>
					<Footer.Link href='#'>Privacy</Footer.Link>
					<Footer.Link href='#'>Speed Test</Footer.Link>
				</Footer.Column>
				<Footer.Column>
					<Footer.Link href='#'>Media Center</Footer.Link>
					<Footer.Link href='#'>Buy Gift Cards</Footer.Link>
					<Footer.Link href='#'>Cookie Preferences</Footer.Link>
					<Footer.Link href='#'>Legal Notices</Footer.Link>
				</Footer.Column>
			</Footer.Row>
			<Footer.Break />

			<Footer.LanguagePicker>
				<Footer.LanguageSelectContainer>
					<Footer.Select id='lang' value={lang} onChange={handleChangeLanguage}>
						<Footer.LanguageOpt value='en'>English</Footer.LanguageOpt>
						<Footer.LanguageOpt value='pl'>Polski</Footer.LanguageOpt>
					</Footer.Select>
				</Footer.LanguageSelectContainer>
			</Footer.LanguagePicker>

			<Footer.Break />

			<Footer.Text>Netflix Poland</Footer.Text>
		</Footer>
	);
};

export default FooterContainer;
