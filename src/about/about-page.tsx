import React from 'react'
import { useTranslation } from 'react-i18next'
import Layout from '../components/layout'
import { PageTitle } from '../shared/page-title'
import { MarmicodeDetails } from './marmicode-details'
import { Title } from './title'
import { ValuesSection } from './values-section'
import { WwdSection } from './wwd-section'
import { YounesSection } from './younes-section'

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
    </Layout>
  )
}
