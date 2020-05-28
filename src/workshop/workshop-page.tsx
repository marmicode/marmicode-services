import { useTranslation } from 'react-i18next'
import Layout from '../components/layout'
import { WorkshopCard } from './workshop-card'
import { ReserveButton } from './reserve-button'
import { DetailsSection } from './detail-section'
import { SimilarWorkshop } from './similar-workshop'
import { Footer } from '../landing/footer'
import React from 'react'

export default function WorkshopPage() {
  const { t } = useTranslation('workshop details')

  return (
    <Layout title={t('Services')}>
      <WorkshopCard />
      <ReserveButton />
      <DetailsSection />
      <SimilarWorkshop />
      <Footer />
    </Layout>
  )
}
