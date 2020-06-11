import React from 'react'
import { useTranslation } from 'react-i18next'
import Layout from '../components/layout'
import { ButtonReserve } from '../shared/button-reserve'
import { PageTitle } from '../shared/page-title'
import { ConsultingSection } from './consulting-section'

export function ConsultingPage() {
  const { t } = useTranslation('landing')
  return (
    <Layout title={t('Consulting')}>
      <PageTitle title={'Consulting'} />
      <ConsultingSection />
      <ButtonReserve />
    </Layout>
  )
}
