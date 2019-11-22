import "@emotion/core"
import styled from "@emotion/styled"
import React from "react"
import { Layout } from "../components/layout"

export const Title = styled.h1`
  color: #380030;
  font-family: 'Source Sans Pro', Arial, sans-serif;
  font-size: 30px;
`

export const IndexPage = () => {
  return <Layout title={'Welcome'}></Layout>
}

export default IndexPage
