import { useTranslation } from 'react-i18next'
import { css } from '@emotion/core'
import React from 'react'
import { Picture } from '../components/shared/picture'

export function Hero() {
  const { t } = useTranslation('landing')

  const underlineText = {
    textDecoration: 'underline',
    textDecorationColor: '#5DB3AD',
  }

  return (
    <div
      css={{
        position: 'absolute',
        left: '6%',
        top: '30%',
      }}
    >
      <div
        css={css({
          color: 'white',
          fontSize: '170%',
        })}
      >
        <h1>{t('hero.title')}</h1>
        <h2>{t('hero.subtitle')}</h2>
      </div>
    </div>
  )
}

export function Banner() {
  return (
    <div
      css={css({
        width: '100%',
        height: 'calc(100vh - 60px)',
      })}
    >
      <div css={css({ position: 'fixed', top: 0, zIndex: -1 })}>
        <Picture
          height={'100vh'}
          width={'100vw'}
          path={'cooking-pot-wide.jpg'}
        />
      </div>
      <Hero />
    </div>
  )
}
