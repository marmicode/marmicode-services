import { useTranslation } from 'react-i18next'
import Layout from '../components/layout'
import { PageTitle } from '../shared/page-title'
import { ConsultingSection } from './consulting-section'
import { ButtonReserve } from '../shared/button-reserve'
import { Footer } from '../shared/footer'
import React from 'react'

export function(ConsultingPage) {
  const { t } = useTranslation('landing')
  return (
    <Layout title={t('Consulting')}>
      <PageTitle title={'Consulting'}/>
      <ConsultingSection/>
      <ButtonReserve/>
      <Footer/>
    </Layout>
  )
}