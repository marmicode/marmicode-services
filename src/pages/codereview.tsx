import React from 'react'
import { useTranslation } from 'react-i18next'
import Layout from '../components/layout'
import { PageTitle } from '../shared/page-title'
import { Picture } from '../shared/picture'
import { theme } from '../config/theme'
import Button from '@material-ui/core/Button'
import { Footer } from '../shared/footer'
import {
  ButtonReserve,
  ConceptCard,
  ConceptRight,
  ConceptSection,
} from './consulting'

export default function(ConsultingPage) {
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

export function ReviewSection() {
  return (
    <>
      <ConceptCard
        title={'What is "Consulting" ?'}
        picture={'review/review1.jpg'}
      >
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet,{' '}
      </ConceptCard>
      <ConceptRight title={'Our method.'} picture={'review/review2.jpg'}>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet,
      </ConceptRight>
      <ConceptCard title={'Avantages'} picture={'review/review3.jpg'}>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet,{' '}
      </ConceptCard>
    </>
  )
}
