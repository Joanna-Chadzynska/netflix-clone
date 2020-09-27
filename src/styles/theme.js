import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
	colors: {
		gray: {
			veryLight: '#e5e5e5',
			veryLight2: '#e6e6e6',
			light: '#757575',
			light3: '#737373',
			light4: ' #8c8c8c',
			middle: '#303030',
			dark: '#333333',
		},
		black: '#000000',
		white: '#ffffff',
		green: {
			primary: '#008000',
		},
		red: {
			primary: '#FF0000',
			secondary: '#e50914',
			btn: '#ff0a16',
			btnLink: '#f40612',
			btnPlay: '#ff1e1e',
		},
		orange: {
			primary: '#e87c03',
			secondary: '#ffa00a',
		},
	},
};

const Theme = ({ children }) => (
	<ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
