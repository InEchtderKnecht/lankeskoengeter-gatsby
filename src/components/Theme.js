import React from 'react'
import { ThemeProvider, css } from 'styled-components'

const sizes = {
  papabear: 1000,
  brotherbear: 900,
  mamabear: 700,
  babybear: 400
}

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `
  return acc
}, {})

const Theme = ({ children }) => (
  <ThemeProvider theme={{
    media,
    colors: {
      bg: 'white',
      text: 'black',
      action: 'rgb(0,0,255)',
    },
    fonts: {
      title: css`
        font-family: Helvetica, Arial, sans-serif;
        font-weight: normal;
        line-height: 1.3;
        font-size: 2.8rem;
        font-weight: normal;
      `,
      normal: css`
        font-family: Helvetica, Arial, sans-serif;
        font-weight: normal;
        line-height: 1.4;
        font-size: 1.4rem;
        font-weight: normal;
      `,
      small: css`
        font-family: Helvetica, Arial, sans-serif;
        font-weight: normal;
        line-height: 1.45;
        font-size: 1.2rem;
        font-weight: normal;
      `
    },
  }}>
    {children}
  </ThemeProvider>
)

export default Theme
