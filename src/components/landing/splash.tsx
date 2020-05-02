import '@emotion/core'
import { graphql, useStaticQuery } from 'gatsby'
import { useTranslation } from 'react-i18next'
import { Background, Parallax } from 'react-parallax'
import { marmicodeColor, marmicodeColorWithOpacity } from '../../config/config'
import { createGradient } from '../../helpers/create-gradient'
import { Hero } from '../hero'
import { useState, useEffect } from 'react'
import { Slant } from '../slant'

export const Splash = () => {
  const { t } = useTranslation('landing')
  const windowSize = useWindowSize()

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
      marmicodeColor,
      ...createGradient({
        colorA: marmicodeColorWithOpacity(0.9),
        colorB: marmicodeColor,
      }),
    ],
  }

  return (
    <div css={{ position: 'relative', height: `calc(100vh - 60px)` }}>
      <Parallax
        css={{ height: '100%', ...gradient }}
        strength={400}
      >
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
          <Hero title={t('hero.title')} subtitle={t('hero.subtitle')} />
        </div>
      </Parallax>
      <Slant />
    </div>
  )
}

function useWindowSize() {
  const isClient = typeof window === 'object'

  const getSize = () => ({
    width: isClient ? window.innerWidth : undefined,
    height: isClient ? window.innerHeight : undefined,
  })

  const [windowSize, setWindowSize] = useState(getSize)

  useEffect(() => {
    if (!isClient) {
      return
    }

    const handleResize = () => setWindowSize(getSize())

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowSize
}
