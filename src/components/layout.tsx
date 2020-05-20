import { css, Global } from '@emotion/core'
import styled from '@emotion/styled'
import { Toolbar } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/core/styles'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'
import { marmicodePrimaryColor } from '../config/config'
import '../config/i18n'
import { theme } from '../config/theme'
import SEO from './seo'

const bodyStyle = css`
  body {
    margin: 0;
  }
`

export const Title = styled.h1`
  position: absolute;
  color: ${marmicodePrimaryColor};
  font-family: 'Source Sans Pro', Arial, sans-serif;
  bottom: 5px;
  left: 90px;
  margin: 0;
`

const languageLinkCss = css({
  fontSize: '2em',
  textDecoration: 'none',
})

export const LanguageSelector = () => {
  const { i18n } = useTranslation()

  const links = [
    {
      language: 'fr',
      flag: 'fr',
      href: 'https://marmicode.fr',
    },
    {
      language: 'en',
      flag: 'gb',
      href: 'https://marmicode.io',
    },
  ]

  return (
    <>
      {links.map(link => {
        const isSelectedLanguage = link.language === i18n.language
        return (
          <a
            css={{
              fontSize: '1.5em',
              textDecoration: 'none',
              margin: '0 10px',
              ...(isSelectedLanguage
                ? {
                    cursor: 'default',
                    filter: 'grayscale(1)',
                  }
                : {}),
            }}
            href={link.href}
            key={link.language}
          >
            <span className={`flag-icon flag-icon-${link.flag}`}></span>
          </a>
        )
      })}
    </>
  )
}

export const Layout = ({ children, title }: { children?; title: string }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      logo: file(relativePath: { eq: "icon.png" }) {
        childImageSharp {
          fixed(width: 60) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <>
      <Global styles={bodyStyle}></Global>
      <SEO title={title}></SEO>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Raleway"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,300,600,400italic,700"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.6/css/flag-icon.min.css"
          rel="stylesheet"
        />
      </Helmet>
      <Toolbar
        style={{ display: 'flex', backgroundColor: 'white', minHeight: '60px' }}
      >
        <Img fadeIn={false} fixed={data.logo.childImageSharp.fixed} />
        <Title>{data.site.siteMetadata.title}</Title>
        <div css={{ flex: 1 }} />
        <LanguageSelector />
      </Toolbar>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  )
}

export default Layout
