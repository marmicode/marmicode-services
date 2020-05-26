import React from 'react'
import { useTranslation } from 'react-i18next'
import Layout from '../components/layout'
import Button from '@material-ui/core/Button'
import { Picture } from '../shared/picture'
import { TitleWorkshop } from './workshop'
import TextField from '@material-ui/core/TextField'
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail'
import PhoneIcon from '@material-ui/icons/Phone'
import WorkIcon from '@material-ui/icons/Work'
import PlaceIcon from '@material-ui/icons/Place'
import {
  DottyLine,
  Footer,
  LandingSection,
  PublicationSection,
} from './landing'
import { ServicesCards } from './services'
import { css } from '@emotion/core'
import CardActionArea from '@material-ui/core/CardActionArea'
import { GuideSection, TalkSection, VideoSection } from './ressources'
import { theme } from '../config/theme'

export default function ContactPage() {
  const { t } = useTranslation('workshop')

  return (
    <Layout title={t('Contact')}>
      <TitleWorkshop title={'Contact'} />
      <Subtitle />
      <Form />
      <InformationSection />
      <Footer />
    </Layout>
  )
}

export function Subtitle() {
  return (
    <h1
      css={{
        display: 'flex',
        justifyContent: 'center',
        color: '#380030',
      }}
    >
      N'hésitez pas à nous contacter !
    </h1>
  )
}

export function Form() {
  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center,',
      }}
    >
      <TextField
        css={{
          width: '50%',
          display: 'flex',
          margin: 'auto',
          marginBottom: '20px',
        }}
        id="outlined-textarea"
        label="E-mail"
        placeholder="E-mail"
        multiline
        variant="outlined"
      />
      <TextField
        css={{
          width: '50%',
          display: 'flex',
          margin: 'auto',
          marginBottom: '20px',
        }}
        id="outlined-textarea"
        label="Name"
        placeholder="Name"
        multiline
        variant="outlined"
      />
      <TextField
        css={{
          width: '50%',
          display: 'flex',
          margin: 'auto',
          marginBottom: '20px',
        }}
        id="outlined-textarea"
        label="Company"
        placeholder="Company"
        multiline
        variant="outlined"
      />
      <TextField
        css={{
          width: '50%',
          display: 'flex',
          margin: 'auto',
          marginBottom: '20px',
        }}
        id="outlined-number"
        label="Number"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
      />
      <TextField
        css={{
          width: '50%',
          display: 'flex',
          margin: 'auto',
          marginBottom: '20px',
        }}
        id="outlined-multiline-static"
        label="Message"
        multiline
        rows={4}
        variant="outlined"
      />
      <Button
        variant="contained"
        color="primary"
        css={{ width: '120px', display: 'flex', margin: 'auto' }}
      >
        Confirm
      </Button>
    </div>
  )
}

export function InformationSection() {
  return (
    <LandingSection title={'Informations'}>
      <div
        css={{
          display: 'flex',
          margin: 'auto',
          flexDirection: 'column',
          fontSize: '12px',
          justifyContent: 'center',
          [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
            fontSize: '15px',
          },
        }}
      >
        <div
          css={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          <div
            css={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <AlternateEmailIcon color="primary" />
            <h3 css={{ marginLeft: '15px' }}>camijote@marmicode.fr</h3>
          </div>
          <div
            css={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <PhoneIcon color="primary" />
            <h3 css={{ marginLeft: '15px' }}>+33 (0) 4 26 83 61 92</h3>
          </div>
          <div
            css={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <PlaceIcon color="primary" />
            <h3 css={{ marginLeft: '15px' }}>Lyon</h3>
          </div>
        </div>
        <div>
          <div
            css={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              paddingLeft: '0px',
              margin: 'auto',
              [theme.breakpoints.up('md')]: {
                paddingLeft: '80px',
              },
            }}
          >
            <div
              css={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}
            >
              <WorkIcon color="primary" />
              <h3 css={{ marginLeft: '15px' }}>Wishtack</h3>
            </div>
            <h3>SIREN: 827 570 490</h3>
            <h3>VAT N°: FR 71 827570490</h3>
          </div>
        </div>
      </div>
    </LandingSection>
  )
}