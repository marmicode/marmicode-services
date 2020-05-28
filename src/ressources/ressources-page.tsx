import { useTranslation } from 'react-i18next'
import Layout from '../components/layout'
import { PageTitle } from '../shared/page-title'
import { TalkSection } from './talk-section'
import { VideoSection } from './video-section'
import { GuideSection } from './guide-section'
import { Footer } from '../shared/footer'
import React from 'react'

export default function RessourcesPage() {
  const { t } = useTranslation('workshop')

  return (
    <Layout title={t('Ressources')}>
      <PageTitle title={'Ressources'} />
      <TalkSection />
      <VideoSection />
      <GuideSection />
      <Footer />
    </Layout>
  )
}
