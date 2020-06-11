import React from 'react'
import { useTranslation } from 'react-i18next'
import Layout from '../components/layout'
import { PageTitle } from '../shared/page-title'
import { GuideSection } from './guide-section'
import { TalkSection } from './talk-section'
import { VideoSection } from './video-section'

export function RessourcesPage() {
  const { t } = useTranslation('workshop')

  return (
    <Layout title={t('Ressources')}>
      <PageTitle title={'Ressources'} />
      <TalkSection />
      <VideoSection />
      <GuideSection />
    </Layout>
  )
}
