import '@emotion/core'
import styled from '@emotion/styled'
import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { Parallax } from 'react-parallax'
import { Layout } from '../components/layout'

export const Title = styled.h1`
  color: #380030;
  font-family: 'Source Sans Pro', Arial, sans-serif;
  font-size: 30px;
`

export const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      background: file(relativePath: { eq: "cooking-pot.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  console.log(data.background.childImageSharp.fluid.src)

  return (
    <>
      <Layout title={'Welcome'}></Layout>
      <div>
        <Parallax
          bgImage={data.background.childImageSharp.fluid.src}
          bgImageAlt="marmicode cooking pot"
          bgImageStyle={{ backgroundSize: 'cover' }}
          strength={200}
        >
          <div style={{ height: '400px' }} />
        </Parallax>
      </div>
      <div css={{ height: '1000px' }}></div>
    </>
  )
}

export default IndexPage
