import '@emotion/core'
import styled from '@emotion/styled'
import { Toolbar } from '@material-ui/core'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import { Helmet } from 'react-helmet'

export const Title = styled.h1`
  color: #380030;
  font-family: 'Source Sans Pro', Arial, sans-serif;
  font-size: 30px;
`

export const Layout = ({ children }: { children? }) => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "icon.png" }) {
        childImageSharp {
          fixed(width: 60) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  console.log(data.logo)

  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,300,600,400italic,700"
          rel="stylesheet"
          type="text/css"
        />
      </Helmet>
      <Toolbar>
        <Img fadeIn={false} fixed={data.logo.childImageSharp.fixed} />
        <Title style={{ marginBottom: 0, marginTop: '20px' }}>Marmicode</Title>
      </Toolbar>
      {children}
    </>
  )
}

export const IndexPage = () => {
  return <Layout></Layout>
}

export default IndexPage
