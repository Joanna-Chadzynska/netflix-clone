import React from 'react';
import { LogoAnimation } from '../../components';

const AnimatedLogo = () => {
	return (
		<LogoAnimation>
			<LogoAnimation.LetterN>
				<LogoAnimation.Shape />
				<LogoAnimation.Shape />
				<LogoAnimation.Shape />
			</LogoAnimation.LetterN>

			<LogoAnimation.LetterE>
				<LogoAnimation.Shape />
				<LogoAnimation.Shape />
				<LogoAnimation.Shape />
				<LogoAnimation.Shape />
			</LogoAnimation.LetterE>

			<LogoAnimation.LetterT>
				<LogoAnimation.Shape />
				<LogoAnimation.Shape />
			</LogoAnimation.LetterT>

			<LogoAnimation.LetterF>
				<LogoAnimation.Shape />
				<LogoAnimation.Shape />
				<LogoAnimation.Shape />
			</LogoAnimation.LetterF>

			<LogoAnimation.LetterL>
				<LogoAnimation.Shape />
				<LogoAnimation.Shape />
			</LogoAnimation.LetterL>

			<LogoAnimation.LetterI>
				<LogoAnimation.Shape />
			</LogoAnimation.LetterI>

			<LogoAnimation.LetterX>
				<LogoAnimation.Shape />
				<LogoAnimation.Shape />
			</LogoAnimation.LetterX>
		</LogoAnimation>
	);
};

export default AnimatedLogo;
