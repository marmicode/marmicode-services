import { Toolbar } from '@material-ui/core'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import { Helmet } from 'react-helmet'
import { Title } from '../pages'
import SEO from './seo'

export const Layout = ({ children, title }: { children?, title: string }) => {
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
      <SEO title={title}></SEO>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,300,600,400italic,700"
          rel="stylesheet"
          type="text/css"
        />
      </Helmet>
      <Toolbar>
        <Img fadeIn={false} fixed={data.logo.childImageSharp.fixed} />
        <Title style={{ marginBottom: 0, marginTop: '20px' }}>
          {data.site.siteMetadata.title}
        </Title>
      </Toolbar>
      {children}
    </>
  )
}
