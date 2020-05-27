import React from 'react'
import { useTranslation } from 'react-i18next'
import Layout from '../components/layout'
import { Banner } from './banner'
import { Footer } from './footer'
import { PageSection } from './page-section'
import { NewsSection } from './news-section'
import { PresentationCard } from './presentation-card'
import { ServicesSection } from './services-section'
import { TalksSection } from './talks-section'

export function LandingPage() {
  const { t } = useTranslation('landing')

  return (
    <Layout title={t('title')}>
      <Banner />
      <ServicesSection />
      <PageSection title={'coach'}>
        <PresentationCard />
      </PageSection>
      <TalksSection />
      <NewsSection />
      <Footer />
    </Layout>
  )
}
