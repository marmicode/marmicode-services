import { css, Global } from '@emotion/core'
import styled from '@emotion/styled'
import { Toolbar } from '@material-ui/core'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'
import { marmicodeColor } from '../config/config'
import '../i18n/i18n'
import SEO from './seo'

const bodyStyle = css`
  body {
    margin: 0;
  }
`

export const Title = styled.h1`
  position: absolute;
  color: ${marmicodeColor};
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
      text: '🇫🇷',
      href: 'https://marmicode.fr',
    },
    {
      language: 'en',
      text: '🇬🇧',
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
              fontSize: '2em',
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
            {link.text}
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
      </Helmet>
      <Toolbar style={{ display: 'flex', minHeight: '60px' }}>
        <Img fadeIn={false} fixed={data.logo.childImageSharp.fixed} />
        <Title>{data.site.siteMetadata.title}</Title>
        <div css={{ flex: 1 }}></div>
        <LanguageSelector></LanguageSelector>
      </Toolbar>
      {children}
    </>
  )
}

export default Layout
