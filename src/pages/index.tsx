import React from 'react'
import styled from '@emotion/styled'
import { Toolbar } from '@material-ui/core'
import { Helmet } from 'react-helmet'
// import { css } from "@emotion/core"

export const Title = styled.h1`
  color: #380030;
  font-family: 'Source Sans Pro', Arial, sans-serif;
  font-size: 30px;
`

export const Layout = ({children}) => (
  <>
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,300,600,400italic,700"
        rel="stylesheet"
        type="text/css"
      />
    </Helmet>
    {children}
  </>
)

export const IndexPage = () => {
  return (
    <Layout>
      <Title>Marmicode</Title>
    </Layout>
  )
}

export default IndexPage
