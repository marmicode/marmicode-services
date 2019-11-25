import '@emotion/core'
import { graphql, useStaticQuery } from 'gatsby'
import { Parallax } from 'react-parallax'
import { marmicodeColor, marmicodeColorWithOpacity } from '../../config/config'
import { hero } from '../../content/hero'
import { createGradient } from '../../helpers/create-gradient'
import { Hero } from '../hero'

export const Splash = () => {
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
  )
}
