import React from 'react'
import { useTranslation } from 'react-i18next'
import Layout from '../components/layout'
import { TopLeftSlant } from '../shared/slant'
import { AllWorkshopSection } from '../workshops/all-workshop-section'
import { Banner } from './banner'
import { LandingSection } from './landing-section'
import { PresentationCard } from './presentation-card'
import { ServicesSection } from './services-section'

export function LandingPage() {
  const { t } = useTranslation('landing')

  return (
    <Layout title={t('title')}>
      <Banner />
      <AllWorkshopSection />
      <LandingSection title={'coach'}>
        <PresentationCard />
      </LandingSection>
      <ServicesSection />
    </Layout>
  )
}
