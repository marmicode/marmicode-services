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

import { ServicesSection } from './services'
import { css } from '@emotion/core'

export default function WorkshopDetailsPage() {
  const { t } = useTranslation('workshop details')

  return (
    <Layout title={t('Services')}>
      <DetailsSection />
      <Footer />
    </Layout>
  )
}

export function DetailsSection() {
  return (
    <>
      <h1
        css={{
          backgroundColor: '#380030',
          color: 'white',
          display: 'flex',
          height: '100px',
          width: '100%',
          alignItems: 'center',
          paddingLeft: '15px',
        }}
      >
        Angular Unit-Testing Workshop- Fundamental & test-driven development
      </h1>

      <div
        css={{
          borderBottom: 'solid',
          borderBottomColor: '#380030',
          paddingLeft: '15px',
        }}
      >
        <h2>Description</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </p>
      </div>

      <div
        css={{
          borderBottom: 'solid',
          borderBottomColor: '#380030',
          paddingLeft: '15px',
        }}
      >
        <h2>Objectives</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </p>
      </div>
      <div
        css={{
          borderBottom: 'solid',
          borderBottomColor: '#380030',
          paddingLeft: '15px',
        }}
      >
        <h2>Place</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </p>
      </div>
      <div
        css={{
          borderBottom: 'solid',
          borderBottomColor: '#380030',
          paddingLeft: '15px',
        }}
      >
        <h2>Déroulement de la journée</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </p>
      </div>
      <div
        css={{
          borderBottom: 'solid',
          borderBottomColor: '#380030',
          paddingLeft: '15px',
        }}
      >
        <h2>Requirement</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </p>
      </div>
      <div
        css={{
          borderBottom: 'solid',
          borderBottomColor: '#380030',
          paddingLeft: '15px',
        }}
      >
        <h2>Program</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </p>
      </div>
      <div
        css={{
          borderBottom: 'solid',
          borderBottomColor: '#380030',
          paddingLeft: '15px',
        }}
      >
        <h2>The coach</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </p>
      </div>
    </>
  )
}
