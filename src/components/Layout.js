import React from 'react'
import styled from 'styled-components'

import Theme from './Theme'
import GlobalStyle from './GlobalStyle'

const Layout = ({ children }) => (
  <Theme>
    <GlobalStyle />
    <Main>{children}</Main>
  </Theme>
)

const Main = styled.main``

export default Layout
