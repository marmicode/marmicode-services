import '@emotion/core'
import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { Parallax } from 'react-parallax'
import { Hero } from '../components/hero'
import { Layout } from '../components/layout'
import { Slant } from '../components/slant'
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

  const sectionList = [
    {
      title: 'Services',
    },
    {
      title: 'Pricing',
    },
    {
      title: 'Testimonials',
    },
    {
      title: 'Your Coach',
    },
    {
      title: 'Get in touch',
    },
  ]

  return (
    <Layout title={'Welcome'}>
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
      <Slant />
      {sectionList.map(section => (
        <section
          key={section.title}
          css={{ textAlign: 'center', height: '100vh' }}
        >
          <h1>{section.title}</h1>
        </section>
      ))}
    </Layout>
  )
}

export default IndexPage
