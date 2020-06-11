import { useTranslation } from 'react-i18next'
import Layout from '../components/layout'
import { PageTitle } from '../shared/page-title'
import { ReviewSection } from './review-section'
import { ButtonReserve } from '../shared/button-reserve'
import { Footer } from '../shared/footer'
import React from 'react'

export function CodereviewPage() {
  const { t } = useTranslation('landing')
  return (
    <Layout title={t('Code review')}>
      <PageTitle title={'Code review'} />
      <ReviewSection />
      <ButtonReserve />
      <Footer />
    </Layout>
  )
}
