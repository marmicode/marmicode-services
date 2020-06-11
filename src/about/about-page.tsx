import { useTranslation } from 'react-i18next'
import Layout from '../components/layout'
import { PageTitle } from '../shared/page-title'
import { MarmicodeDetails } from './marmicode-details'
import { Title } from './title'
import { WwdSection } from './wwd-section'
import { ValuesSection } from './values-section'
import { YounesSection } from './younes-section'
import { Footer } from '../shared/footer'
import React from 'react'

export function AboutPage() {
  const { t } = useTranslation('landing')
  return (
    <Layout title={t('About')}>
      <PageTitle title={'About us.'} />
      <MarmicodeDetails />
      <Title />
      <WwdSection />
      <ValuesSection />
      <YounesSection />
      <Footer />
    </Layout>
  )
}
