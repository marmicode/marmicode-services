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
import { DottyLine } from '../shared/dotty-line'
import { Footer, LandingSection } from './landing'
import { Picture } from '../shared/picture'
import { ServiceButton } from '../landing/banner'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { WorkshopCard } from './workshopdetails'

export default function WorkshopPage() {
  const { t } = useTranslation('workshop')

  return (
    <Layout title={t('Workshop')}>
      <TitleWorkshop title={'WORKSHOPS'} />
      <AllWorkshopSection />
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
      css={{
        display: 'flex',
        margin: 'auto',
        marginTop: '20px',
      }}
    >
      See all comments
    </Button>
  )
}
export function Comments({ name, workshop, children }) {
  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        border: 'solid 2px',
        borderColor: '#380030',
        marginTop: '10px',
        [theme.breakpoints.up('sm')]: {
          width: '45%',
        },
      }}
    >
      <div css={{ paddingLeft: '20px' }}>
        <h2 css={{ color: '#380030' }}>{name}</h2>
      </div>
      <div css={{ paddingLeft: '20px' }}>
        <p css={{ color: '#5DB3AD' }}> Workshop: {workshop}</p>
        <p>{children}</p>
      </div>
    </div>
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
          justifyContent: 'space-around',
        }}
      >
        <Comments name="Pierre" workshop="Angular">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit rebum. Stet clita kasd
          gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          Lorem ipsum dolor sit
        </Comments>
        <Comments name="Paul" workshop="Angular">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit
        </Comments>
      </div>
      <div
        css={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          marginTop: '20px',
        }}
      >
        <Comments name="Jacques" workshop="Angular">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit
        </Comments>
        <Comments name="Louis" workshop="Angular">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit
        </Comments>
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
      size={'medium'}
      css={{ margin: 'auto', marginTop: '15px', marginBottom: '15px' }}
    >
      <Button>Reserve</Button>
      <Button>More details</Button>
    </ButtonGroup>
  )
}

export function AllWorkshopSection() {
  return (
    <>
      <div
        css={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          margin: 'auto',
          marginTop: '20px',
          width: '380px',
          [theme.breakpoints.up('lg')]: {
            width: '1300px',
          },
        }}
      >
        <WorkshopsCard />
        <WorkshopsCard />
      </div>
      <div
        css={{
          display: 'flex',
          margin: '20px',
          flexWrap: 'wrap',
          margin: 'auto',
          width: '380px',
          [theme.breakpoints.up('lg')]: {
            width: '1300px',
          },
        }}
      >
        <WorkshopsCard />
        <WorkshopsCard />
      </div>
    </>
  )
}
export function WorkshopsCard() {
  return (
    <div
      css={{
        display: 'flex',
        margin: 'auto',
        flexDirection: 'column',
        marginLeft: '10px',
        flexWrap: 'wrap',
        width: '550px',
      }}
    >
      <div>
        <h2
          css={{
            backgroundColor: '#5E335A',
            color: 'white',
            textAlign: 'center',
            margin: '0px',
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
          marginTop: '0px',
          padding: '0px',
        }}
      >
        <Picture path={'workshop/angular.png'} height={'250px'} width={'50%'} />
        <div
          css={{
            display: 'flex',
            flexDirection: 'column',
            margin: 'auto',
          }}
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
      <ButtonGroups />
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
