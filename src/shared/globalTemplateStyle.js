import { createGlobalStyle } from "styled-components";

export const GlobalTemplateStyle = createGlobalStyle`

body {
  font-family: 'Quicksand', arial, sans-serif;
  background: #262121;
  color: white;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

h1,h2,h3,h4,h5,h6 {
  font-family: 'Playfair Display', arial, sans-serif;
  color: #ff8400;
  letter-spacing: 2px;
  text-transform: uppercase;
}


p {
  font-family: 'Quicksand', arial, sans-serif;
  line-height: 25px;
  font-size: 20px;
  line-height: 35px;
}

`;
