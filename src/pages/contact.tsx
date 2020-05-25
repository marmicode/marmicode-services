import React from 'react'
import { useTranslation } from 'react-i18next'
import Layout from '../components/layout'
import Button from '@material-ui/core/Button'
import { Picture } from '../shared/picture'
import { TitleWorkshop } from './workshop'
import TextField from '@material-ui/core/TextField'
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
      <div>
        <div></div>
      </div>
    </LandingSection>
  )
}
