import React from 'react'
import { useTranslation } from 'react-i18next'
import Layout from '../components/layout'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { DottyLine, Footer, LandingSection } from './landing'
import { Picture } from '../shared/picture'
import {
  CommentButton,
  CommentsSection,
  DetailsWorkshops,
  ReserveButton,
  SimilarWorkshops,
  TitleWorkshop,
} from './workshop'

export default function WorkshopPage() {
  const { t } = useTranslation('workshop')

  return (
    <Layout title={t('Services')}>
      <TitleWorkshop title={'SERVICES'} />
      <ServicesSection />
      <Footer />
    </Layout>
  )
}

export function ServicesSection() {
  return (
    <div css={{ display: 'flex', flexDirection: 'row' }}>
      <Picture path={'blog.png'} height={'30%'} width={'30%'} />
      <div>
        <h1 css={{ textAlign: 'left' }}>Workshop</h1>
        <p>blabla blabla blabla blabla</p>
        <Button variant="contained" color="primary">
          See more
        </Button>
      </div>
    </div>
  )
}
