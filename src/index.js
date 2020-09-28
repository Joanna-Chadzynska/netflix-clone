import 'normalize.css';
import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { FirebaseContext } from './context/firebase';
import { firebase } from './lib/firebase.prod';
import { GlobalStyles } from './styles/globalStyles';
import Theme from './styles/theme';

render(
	<React.StrictMode>
		<FirebaseContext.Provider value={{ firebase }}>
			<Theme>
				<GlobalStyles />
				<App />
			</Theme>
		</FirebaseContext.Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
