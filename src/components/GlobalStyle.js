import { createGlobalStyle, css } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  ${({ theme }) => css`
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
      background: ${theme.colors.bg};
      color: ${theme.colors.text};
      ${theme.fonts.normal}
    }
    #gatsby-focus-wrapper {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: stretch;
      min-height: 100vh;
      padding: 0 3rem;
      ${theme.media.babybear`
        padding: 0 4rem;
      `}
      ${theme.media.mamabear`
        padding: 0 5rem;
      `}
      ${theme.media.brotherbear`
        padding: 0 6rem;
      `}
      ${theme.media.papabear`
        padding: 0 7rem;
      `}
    }
    a {
      color: ${theme.colors.action};
      text-decoration: none;
      &:hover {
        text-decoration: none;
      }
    }
    address {
      font-style: normal;
    }
    strong {
      font-weight: normal;
    }
    h1, h2, h3, h4, h5, p {
      margin: 0;
    }
    h1 {
      ${theme.fonts.title}
      margin: 0.3em 0;
    }
    img {
      width: 100%;
      margin: 0;
      border: none;
    }
  `}
`

export default GlobalStyle
