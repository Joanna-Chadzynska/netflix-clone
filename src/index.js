import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { GlobalStyles } from './styles/globalStyles';

render(
	<React.StrictMode>
		<GlobalStyles />
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);
