import React from 'react'
import styled from 'styled-components'

import SEO from './seo'
import Theme from './Theme'
import GlobalStyle from './GlobalStyle'

import Logo from '../images/lk_logo.png'

export default ({ children, title = '', lang = 'de' }) => (
  <Theme>
    <GlobalStyle />
    <SEO lang={lang} title={title} />
    <Header>
      <img src={Logo} />
    </Header>
    <Main>
      {title && (
        <h1>{title}</h1>
      )}
      {children}
    </Main>
    <Footer>
      <p>{`LANKES KOENGETER\nArchitekten`}</p>
      <address>{`Wrangelstraße 100\n10997 Berlin`}</address>
    </Footer>
  </Theme>
)

const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  flex: 1;
  font-size: 0;
  > img {
    max-width: 14.3rem;
    margin: .2rem 0;
  }
`

const Main = styled.main`
  flex: 0;
  padding: 3rem 0;
`

const Footer = styled.footer`
  display: block;
  flex: 1;
  ${props => props.theme.fonts.small}
  opacity: 0.3;
  white-space: pre;
`
