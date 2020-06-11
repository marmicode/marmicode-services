import React from 'react'
import { useTranslation } from 'react-i18next'
import Layout from '../components/layout'
import { ButtonReserve } from '../shared/button-reserve'
import { PageTitle } from '../shared/page-title'
import { ReviewSection } from './review-section'

export function CodereviewPage() {
  const { t } = useTranslation('landing')
  return (
    <Layout title={t('Code review')}>
      <PageTitle title={'Code review'} />
      <ReviewSection />
      <ButtonReserve />
    </Layout>
  )
}
