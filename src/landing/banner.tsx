import { Trans, useTranslation } from 'react-i18next'
import { css } from '@emotion/core'
import React from 'react'
import { Picture } from '../components/shared/picture'
import Button from '@material-ui/core/Button'

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

export function Hero() {
  const { t } = useTranslation('landing')

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
        <h1
          css={css({
            strong: {
              textDecoration: 'underline',
              textDecorationColor: '#5DB3AD',
            },
          })}
        >
          <Trans i18nKey="hero.title" t={t} />
        </h1>
        <h2>{t('hero.subtitle')}</h2>
        <div
          css={{
            width: '500px',
            display: 'flex',
            justifyContent: 'space-around',
            margin: '5px',
          }}
        >
          <ServiceButton title={'WORKSHOP'} />
          <ServiceButton title={'COACHING'} />
          <ServiceButton title={'CODE REVIEW'} />
        </div>
      </div>
    </div>
  )
}

export function ServiceButton({ title }: { title: string }) {
  return (
    <Button variant="contained" size="large" color="primary">
      {title}
    </Button>
  )
}
