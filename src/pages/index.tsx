import '@emotion/core'
import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { Parallax } from 'react-parallax'
import { Hero } from '../components/hero'
import { Layout } from '../components/layout'
import {
  hero,
  marmicodeColor,
  marmicodeColorWithOpacity,
} from '../config/config'
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
        colorA: marmicodeColorWithOpacity(0.9),
        colorB: marmicodeColor,
      }),
    ],
  }

  return (
    <>
      <Layout title={'Welcome'} />
      <div>
        <Parallax
          bgImage={data.background.childImageSharp.fluid.src}
          bgImageAlt="marmicode cooking pot"
          bgImageStyle={{ height: '170%', objectFit: 'cover', opacity: 0.65 }}
          css={{ height: 'calc(100vh - 60px)', ...gradient }}
          strength={400}
        >
          <div css={{ marginTop: '30vh' }}>
            <Hero title={hero.title} subtitle={hero.subtitle} />
          </div>
        </Parallax>
      </div>
      <div css={{ height: '1000px' }} />
    </>
  )
}

export default IndexPage
