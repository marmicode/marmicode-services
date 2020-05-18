import styled from '@emotion/styled'
import React from 'react'
import { Trans, useTranslation } from 'react-i18next'
import { mediaDesktop } from '../helpers/media-selectors'

export const HeroContainer = styled.div`
  color: white;
  font-size: 1.2em;
  text-align: center;
  ${mediaDesktop} {
    font-size: 1.8em;
  }
`

export const HeroSubtitle = styled.h2`
  font-style: italic;
`

export function Hero() {
  const { t } = useTranslation('landing')

  return (
    <HeroContainer>
      <h1>
        <Trans i18nKey="hero.title" t={t} />
      </h1>
      <HeroSubtitle>{t('hero.subtitle')}</HeroSubtitle>
    </HeroContainer>
  )
}
