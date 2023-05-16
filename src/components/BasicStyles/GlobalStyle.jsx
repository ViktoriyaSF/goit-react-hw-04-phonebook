import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
background: rgb(174,238,203);
background: radial-gradient(circle, rgba(174,238,203,0.7455357142857143) 0%, rgba(148,187,233,1) 100%);

}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
/* --------- */
h1,
h2,
h3,
h4,
h5,
p {
  margin: 0;
  padding: 0;
}
ul, li {
	margin: 0;
	padding: 0;
	/* list-style: none; */
    text-decoration: none
}
img {
  display: block;
  max-width: 100%;
  height: auto;
}
button {
  display: block;
  font-family: inherit;
  cursor: pointer;
  border: none;
  border-radius: 4px;
}
`;
