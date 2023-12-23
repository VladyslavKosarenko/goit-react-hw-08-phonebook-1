import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';
import styled from 'styled-components';

export const GlobalStyle = createGlobalStyle`html {
  box-sizing: border-box;
  width: 100vw;
  overflow-x: hidden;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  color: #101010;
  background-color: #F2F2F2;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}
ul,
ol {
  margin: 0;
  padding: 0;
  list-style: none;
}
img {
  display: block;
  max-width: 100%;
  height: auto;
}
`;

export const PhonebookTitle = styled.h1`
  text-align: center;
  margin-bottom: 30px;
`;

export const ContactsListTitle = styled.h2`
  text-align: center;
  margin-bottom: 10px;
`;

export const WelcomePageTitle = styled.h1`
  font-size: 48px;
  text-align: center;
`;
