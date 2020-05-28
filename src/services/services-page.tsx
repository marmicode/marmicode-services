import { useTranslation } from 'react-i18next'
import Layout from '../components/layout'
import { PageTitle } from '../shared/page-title'
import { ServicesCards } from './services-cards'
import { Footer } from '../shared/footer'
import React from 'react'

export function ServicesPage() {
  const { t } = useTranslation('workshop')

  return (
    <Layout title={t('Services')}>
      <PageTitle title={'SERVICES'} />
      <ServicesCards />
      <Footer />
    </Layout>
  )
}
