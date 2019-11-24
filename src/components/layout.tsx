import styled from '@emotion/styled'
import { Toolbar } from '@material-ui/core'
import { graphql, useStaticQuery } from 'gatsby'
import { css, Global } from '@emotion/core'
import Img from 'gatsby-image'
import React from 'react'
import { Helmet } from 'react-helmet'
import { marmicodeColor } from '../config/config'
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
          href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,300,600,400italic,700"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Helmet>
      <Toolbar style={{ minHeight: '60px' }}>
        <Img fadeIn={false} fixed={data.logo.childImageSharp.fixed} />
        <Title>{data.site.siteMetadata.title}</Title>
      </Toolbar>
      {children}
    </>
  )
}

export default Layout
