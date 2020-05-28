import { useTranslation } from 'react-i18next'
import Layout from '../components/layout'
import { Subtitle } from './subtitle'
import { Form } from './form'
import { InformationSection } from './information-section'
import { Footer } from '../landing/footer'
import React from 'react'
import { PageTitle } from '../shared/page-title'

export default function ContactPage() {
  const { t } = useTranslation('workshop')

  return (
    <Layout title={t('Contact')}>
      <PageTitle title={'Contact'} />
      <Subtitle />
      <Form />
      <InformationSection />
      <Footer />
    </Layout>
  )
}
