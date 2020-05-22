import { css } from '@emotion/core'
import React from 'react'
import { useTranslation } from 'react-i18next'
import Layout from '../components/layout'
import { theme } from '../config/theme'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Button from '@material-ui/core/Button'
import { DottyLine, Footer, LandingSection } from './landing'
import { Picture } from '../shared/picture'
import { ServiceButton } from '../landing/banner'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

export default function WorkshopPage() {
  const { t } = useTranslation('workshop')

  return (
    <Layout title={t('Workshop')}>
      <TitleWorkshop title={'WORKSHOPS'} />
      <WorkshopsCard />
      <SimilarWorkshops />
      <CommentsSection />
      <CommentButton />
      <Footer />
    </Layout>
  )
}
export function CommentButton() {
  return (
    <Button
      href="#text-buttons"
      color="secondary"
      css={{ display: 'flex', margin: 'auto', width: '20%', marginTop: '20px' }}
    >
      See all comments
    </Button>
  )
}
export function CommentsSection() {
  return (
    <LandingSection title={'Comments'}>
      <div
        css={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          margin: 'auto',
        }}
      >
        <p
          css={{
            width: '400px',
            border: 'solid 1px',
            margin: '5px',
            height: '200px',
            margin: 'auto',
          }}
        >
          Inserer comment
        </p>
        <p
          css={{
            width: '400px',
            border: 'solid 1px',
            margin: '5px',
            margin: 'auto',
          }}
        >
          Inserer comment
        </p>
      </div>
    </LandingSection>
  )
}

export function ButtonGroups() {
  return (
    <ButtonGroup
      disableElevation
      variant="outlined"
      color="primary"
      size={'small'}
      css={{ margin: 'auto', marginTop: '15px', marginBottom: '15px' }}
    >
      <Button>Reserve</Button>
      <Button>Check availabilities</Button>
    </ButtonGroup>
  )
}
export function SimilarWorkshops() {
  return (
    <LandingSection title={'Similar Workshops'}>
      <div
        css={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          marginBottom: '10px',
          justifyContent: 'space-around',
          width: '100%',
        }}
      >
        <div css={{ display: 'flex', flexDirection: 'column' }}>
          <Picture
            path={'workshop/workshop1.jpg'}
            height={'100%'}
            width={'100%'}
          />
          <ButtonGroups />
        </div>
        <div css={{ display: 'flex', flexDirection: 'column' }}>
          <Picture path={'blog.png'} height={'100%'} width={'100%'} />
          <ButtonGroups />
        </div>
        <div css={{ display: 'flex', flexDirection: 'column' }}>
          <Picture path={'blog.png'} height={'100%'} width={'100%'} />
          <ButtonGroups />
        </div>
      </div>
    </LandingSection>
  )
}
export function WorkshopsCard() {
  return (
    <div
      css={{
        height: '100%',
        width: '600px',
        display: 'flex',
        margin: 'auto',
        flexDirection: 'column',
      }}
    >
      <CardContent>
        <div>
          <h2
            css={{
              backgroundColor: '#5E335A',
              color: 'white',
              textAlign: 'center',
            }}
          >
            Angular Unit-Testing Workshop- Fundamental & test-driven development{' '}
          </h2>
        </div>
        <div
          css={{
            display: 'flex',
            flexDirection: 'row',
            backgroundColor: '#380030',
            color: 'white',
          }}
        >
          <Picture
            path={'workshop/angular.png'}
            height={'250px'}
            width={'50%'}
          />
          <div
            css={{ display: 'flex', flexDirection: 'column', margin: 'auto' }}
          >
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
      </CardContent>
      <ButtonGroups />
    </div>
  )
}

export function ReserveButtonDuo() {
  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '500px',
        margin: 'auto',
        marginTop: '20px',
      }}
    >
      <Button
        variant="outlined"
        color="primary"
        size="large"
        css={{ display: 'flex', margin: 'auto' }}
      >
        Reserve / book ?
      </Button>
      <Button
        variant="contained"
        color="primary"
        size="large"
        css={{ display: 'flex', margin: 'auto' }}
      >
        More details
      </Button>
    </div>
  )
}
export function TitleWorkshop({ title }) {
  return (
    <h1
      css={{
        textAlign: 'center',
        color: '#380030',
        fontSize: '50px',
        textDecorationLine: 'underline',
        textDecorationColor: '#5DB3AD',
        marginTop: '40px',
      }}
    >
      {title}
    </h1>
  )
}
