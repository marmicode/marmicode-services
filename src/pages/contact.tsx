import React from 'react'
import { useTranslation } from 'react-i18next'
import Layout from '../components/layout'
import { Footer } from '../landing/footer'
import { TitleWorkshop } from './workshops'
import { Subtitle } from '../contact/subtitle'
import { Form } from '../contact/form'
import { InformationSection } from '../contact/information-section'

export default function ContactPage() {
  const { t } = useTranslation('workshop')

  return (
    <Layout title={t('Contact')}>
      <TitleWorkshop title={'Contact'} />
      <Subtitle />
      <Form />
      <InformationSection />
      <Footer />
    </Layout>
  )
}
