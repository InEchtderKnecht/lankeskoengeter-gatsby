import React from 'react'
import { ThemeProvider } from 'styled-components'

const Theme = ({ children }) => (
  <ThemeProvider theme={{

  }}>
    {children}
  </ThemeProvider>
)

export default Theme
