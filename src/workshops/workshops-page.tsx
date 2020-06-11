import React from 'react'
import { useTranslation } from 'react-i18next'
import Layout from '../components/layout'
import { PageTitle } from '../shared/page-title'
import { AllWorkshopSection } from './all-workshop-section'
import { CommentButton } from './comment-button'
import { CommentsSection } from './comments-section'

export function WorkshopsPage() {
  const { t } = useTranslation('workshop')

  return (
    <Layout title={t('Workshop')}>
      <PageTitle title={'WORKSHOPS'} />
      <AllWorkshopSection />
      <CommentsSection />
      <CommentButton />
    </Layout>
  )
}
