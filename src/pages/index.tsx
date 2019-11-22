import '@emotion/core'
import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { Parallax } from 'react-parallax'
import { Layout } from '../components/layout'
import { marmicodeColor, marmicodeColorWithOpacity } from '../config/config'
import { createGradient } from '../helpers/create-gradient'

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

  const gradient = {
    background: [
      marmicodeColor,
      ...createGradient({
        colorA: marmicodeColorWithOpacity(0.5),
        colorB: marmicodeColor,
      }),
    ],
  }

  return (
    <>
      <Layout title={'Welcome'}></Layout>
      <div>
        <Parallax
          bgImage={data.background.childImageSharp.fluid.src}
          bgImageAlt="marmicode cooking pot"
          bgImageStyle={{ opacity: 0.7 }}
          css={gradient}
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
