import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialised;
    background: ${(props) => props.theme.colors['gray-100']};
    color: ${(props) => props.theme.colors['gray-700']};
  }

  body, input-security, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  h1, h2, h3, h4, h4, h6 {
    font-family: 'Baloo 2', cursive;
  }

  button {
    cursor: pointer;
  }
`
