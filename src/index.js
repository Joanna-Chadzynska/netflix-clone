import 'normalize.css';
import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { GlobalStyles } from './styles/globalStyles';
import Theme from './styles/theme';

render(
	<React.StrictMode>
		<Theme>
			<GlobalStyles />
			<App />
		</Theme>
	</React.StrictMode>,
	document.getElementById('root')
);
