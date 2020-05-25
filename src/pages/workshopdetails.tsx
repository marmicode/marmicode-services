import React from 'react'
import { useTranslation } from 'react-i18next'
import Layout from '../components/layout'
import Button from '@material-ui/core/Button'
import { DottyLine, Footer, LandingSection } from './landing'
import { Picture } from '../shared/picture'
import { css } from '@emotion/core'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { WorkshopsCard } from './workshop'

export default function WorkshopDetailsPage() {
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

export function WorkshopCard() {
  return (
    <Card
      css={{
        height: '100%',
        width: '600px',
        display: 'flex',
        margin: 'auto',
        flexDirection: 'column',
      }}
    >
      <div
        css={{
          display: 'flex',
          flexDirection: 'row',
          backgroundColor: '#380030',
          color: 'white',
        }}
      >
        <Picture path={'workshop/angular.png'} height={'250px'} width={'50%'} />
        <div css={{ display: 'flex', flexDirection: 'column', margin: 'auto' }}>
          <h3> - Avantage 1 </h3>
          <h3> - Avantage 2 </h3>
          <h3> - Avantage 3 </h3>
          <h3> - Avantage 4 </h3>
        </div>
      </div>
      <div css={{ display: 'flex', flexDirection: 'row' }}>
        <div
          css={{
            textAlign: 'center',
            flex: 1,
            border: 'solid',
            borderColor: '#380030',
          }}
        >
          <h3>Next date</h3>
          <h2>TUE, JUN 23 </h2>
        </div>
        <div
          css={{
            textAlign: 'center',
            flex: 1,
            border: 'solid',
            borderColor: '#380030',
          }}
        >
          <h3>Price</h3>
          <h2>From €495,60</h2>
        </div>
      </div>
    </Card>
  )
}

export function ReserveButton() {
  return (
    <Button
      variant="contained"
      color="primary"
      size="large"
      css={{
        display: 'flex',
        margin: 'auto',
        position: 'fixed',
      }}
    >
      Reserver
    </Button>
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

export function SimilarWorkshop() {
  return (
    <LandingSection title={'Similar Workshops'}>
      <div
        css={{
          display: 'flex',
          justifyContent: 'space-around',
          margin: 'auto',
        }}
      >
        <WorkshopsCard />
        <WorkshopsCard />
      </div>
    </LandingSection>
  )
}
