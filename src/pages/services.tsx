import React from 'react'
import { useTranslation } from 'react-i18next'
import Layout from '../components/layout'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { DottyLine, Footer, LandingSection } from './landing'
import { Picture } from '../shared/picture'
import { TitleWorkshop } from './workshop'
import { css } from '@emotion/core'

export default function WorkshopPage() {
  const { t } = useTranslation('workshop')

  return (
    <Layout title={t('Services')}>
      <TitleWorkshop title={'SERVICES'} />
      <ServicesCards />
      <Footer />
    </Layout>
  )
}
export function ServicesCards() {
  return (
    <div>
      <ServicesSection picture={'services/coaching.jpg'} title={'Workshop'}>
        nvgriehgoz hgirtzo bihrtz jbhozrij br
      </ServicesSection>
      <ServicesSection picture={'services/codereview.jpg'} title={'Consulting'}>
        bla lfldn gprzigmeqjzo honlmr,ekf lrgn qlùgl ,m
      </ServicesSection>
      <ServicesSection picture={'services/workshop.jpg'} title={'Code Review'}>
        bla lfldn gprzigmeqjzo honlmr,ekf lrgn qlùgl ,m
      </ServicesSection>
    </div>
  )
}

export function ServicesSection({ picture, title, children }) {
  return (
    <div css={{ display: 'flex', flexDirection: 'row', marginBottom: '40px' }}>
      <Picture path={picture} height={'30%'} width={'30%'} />
      <div css={{ padding: '15px' }}>
        <h1 css={{ textAlign: 'left' }}>{title}</h1>
        <p>{children}</p>
        <Button variant="contained" color="primary">
          See more
        </Button>
      </div>
    </div>
  )
}
