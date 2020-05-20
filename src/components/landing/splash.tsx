import '@emotion/core'
import { graphql, useStaticQuery } from 'gatsby'
import { useTranslation } from 'react-i18next'
import { Background, Parallax } from 'react-parallax'
import {
  marmicodePrimaryColor,
  marmicodeColorWithOpacity,
} from '../../config/config'
import { createGradient } from '../../helpers/create-gradient'
import { Hero } from '../hero'
import { LegacySlant } from '../slant'

export const Splash = () => {
  const { t } = useTranslation('landing')

  const data = useStaticQuery(graphql`
    query {
      background: file(relativePath: { eq: "cooking-pot-wide.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const imageInfo = data.background.childImageSharp.fluid

  const gradient = {
    background: [
      marmicodePrimaryColor,
      ...createGradient({
        colorA: marmicodeColorWithOpacity(0.9),
        colorB: marmicodePrimaryColor,
      }),
    ],
  }

  return (
    <div css={{ position: 'relative', height: `calc(100vh - 60px)` }}>
      <Parallax css={{ height: '100%', ...gradient }} strength={400}>
        <Background>
          <img
            alt="Marmicode Cooking Pot"
            sizes={imageInfo.sizes}
            src={imageInfo.src}
            srcSet={imageInfo.srcSet}
            css={{
              height: '170vh',
              width: '100vw',
              objectFit: 'cover',
              opacity: 0.65,
            }}
          />
        </Background>
        <div css={{ marginTop: '30vh' }}>
          <Hero />
        </div>
      </Parallax>
    </div>
  )
}
