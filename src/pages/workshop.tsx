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

export default function WorkshopPage() {
  const { t } = useTranslation('workshop')

  return (
    <Layout title={t('Workshop')}>
      <TitleWorkshop title={'WORKSHOPS'} />
      <DetailsWorkshops />
      <ReserveButton />
      <DetailsWorkshops />
      <ReserveButton />
      <DetailsWorkshops />
      <ReserveButton />
      <TitleWorkshop title={'RESERVATION'} />
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
          <Picture path={'blog.png'} height={'100%'} width={'100%'} />
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
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(20),
      fontWeight: theme.typography.fontWeightRegular,
    },
  })
)

export function DetailsWorkshops() {
  const classes = useStyles()

  return (
    <ExpansionPanel
      css={{ backgroundColor: '#380030', color: 'white', marginTop: '20px' }}
    >
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className={classes.heading}>
          Angular Unit-Testing Workshop- Fundamental & test-driven development
        </Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <div className={classes.root} css={{ margin: '15px', width: '98%' }}>
          <ExpansionPanel css={{ color: '#380030' }}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>Description</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel css={{ color: '#380030' }}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.heading}>Objectives</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel css={{ color: '#380030' }}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.heading}>Place</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel css={{ color: '#380030' }}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.heading}>
                Déroulement de la journée
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel css={{ color: '#380030' }}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.heading}>Requirement</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel css={{ color: '#380030' }}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.heading}>Program</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel css={{ color: 'primary' }}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.heading}>The coach</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  )
}

export function ReserveButton() {
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
        Check availability
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
