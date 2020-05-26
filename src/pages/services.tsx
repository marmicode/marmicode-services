import Button from '@material-ui/core/Button'
import React from 'react'
import { useTranslation } from 'react-i18next'
import Layout from '../components/layout'
import { theme } from '../config/theme'
import { Footer } from '../landing/footer'
import { Picture } from '../shared/picture'
import { TitleWorkshop } from './workshops'

export default function ServicesPage() {
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
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '40px',
        [theme.breakpoints.up('md')]: {
          flexDirection: 'row',
          marginLeft: '0px',
        },
      }}
    >
      <Picture
        path={picture}
        height={'50%'}
        width={'50%'}
        css={{
          flexWrap: 'wrap',
        }}
      />
      <div css={{ padding: '5px' }}>
        <h1 css={{ textAlign: 'left' }}>{title}</h1>
        <p
          css={{
            fontSize: '20px',
            [theme.breakpoints.up('md')]: { fontSize: '30px' },
          }}
        >
          {children}
        </p>
        <Button variant="contained" color="primary" size="large">
          See more
        </Button>
      </div>
    </div>
  )
}
