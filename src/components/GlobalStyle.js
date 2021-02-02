import { createGlobalStyle, css } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  ${() => css`
    *, *:before, *:after {
      box-sizing: border-box;
    }
    html {
      font-family: sans-serif;
      -ms-text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%;
      font-size: 62.5%;
      overflow-x: hidden;
    }
    body {
      margin: 0;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
  `}
`

export default GlobalStyle
