import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    html, body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.gray.dark};
    font-size: 16px;
    }

    a {
        text-decoration: none;
    }
`;
