import React from 'react'
import { useTranslation } from 'react-i18next'
import Layout from '../components/layout'
import { PageTitle } from '../shared/page-title'
import { Form } from './form'
import { InformationSection } from './information-section'
import { Subtitle } from './subtitle'

export function ContactPage() {
  const { t } = useTranslation('workshop')

  return (
    <Layout title={t('Contact')}>
      <PageTitle title={'Contact'} />
      <Subtitle />
      <Form />
      <InformationSection />
    </Layout>
  )
}
