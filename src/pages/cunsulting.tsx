import React from 'react'
import { useTranslation } from 'react-i18next'
import Layout from '../components/layout'
import { PageTitle } from '../shared/page-title'

export default function(ConsultingPage) {
  const { t } = useTranslation('landing')
  return(
    <Layout title={t('Consulting')}>
      <PageTitle title={'Consulting'} />
  )

}