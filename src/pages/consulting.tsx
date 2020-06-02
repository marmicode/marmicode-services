import React from 'react'
import { useTranslation } from 'react-i18next'
import Layout from '../components/layout'
import { PageTitle } from '../shared/page-title'
import {
  MarmicodeDetails,
  Title,
  ValuesSection,
  WwdSection,
  YounesSection,
} from './about'
import { Picture } from '../shared/picture'
import { theme } from '../config/theme'
import Button from '@material-ui/core/Button'
import { Footer } from '../shared/footer'

export default function(ConsultingPage) {
  const { t } = useTranslation('landing')
  return (
    <Layout title={t('Consulting')}>
      <PageTitle title={'Consulting'} />
      <ConceptSection />
      <ButtonReserve />
      <Footer />
    </Layout>
  )
}

export function ConceptCard({ picture, title, children }) {
  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '40px',
        [theme.breakpoints.up('md')]: {
          flexDirection: 'row',
          marginLeft: '0px',
        },
      }}
    >
      <div
        css={{
          width: '100%',
          display: 'flex',
          margin: 'auto',
          justifyContent: 'center',
          alignItems: 'center',
          [theme.breakpoints.up('md')]: { width: '50%' },
        }}
      >
        <Picture path={picture} height={'100%'} width={'80%'} />
      </div>

      <div
        css={{
          padding: '5px',
          width: '80%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          marginRight: '10px',
          [theme.breakpoints.up('md')]: { width: '50%' },
        }}
      >
        <h1 css={{ textAlign: 'left' }}>{title}</h1>
        <p
          css={{
            fontSize: '15px',
            [theme.breakpoints.up('md')]: { fontSize: '20px' },
          }}
        >
          {children}
        </p>
      </div>
    </div>
  )
}

export function ConceptSection() {
  return (
    <>
      <ConceptCard
        title={'What is "Consulting" ?'}
        picture={'consulting/consulting1.jpg'}
      >
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet,{' '}
      </ConceptCard>
      <ConceptRight
        title={'Our method.'}
        picture={'consulting/consulting2.jpg'}
      >
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet,
      </ConceptRight>
      <ConceptCard title={'Avantages'} picture={'consulting/consulting3.jpg'}>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet,{' '}
      </ConceptCard>
    </>
  )
}

export function ConceptRight({ title, children, picture }) {
  return (
    <div
      css={{
        display: 'flex',
        justifyContent: 'flex-end',
        flexDirection: 'column',
        marginBottom: '40px',
        alignItems: 'center',
        [theme.breakpoints.up('md')]: {
          flexDirection: 'row',
          marginLeft: '0px',
        },
      }}
    >
      <div
        css={{
          paddingRight: '15px',
          textAlign: 'right',
          width: '80%',
          [theme.breakpoints.down('md')]: {
            textAlign: 'left',
            order: 2,
            width: '50%',
          },
        }}
      >
        <h1>{title}</h1>
        <p
          css={{
            fontSize: '15px',
            [theme.breakpoints.up('md')]: { fontSize: '20px' },
          }}
        >
          {children}
        </p>
      </div>
      <div
        css={{
          width: '100%',
          display: 'flex',
          margin: 'auto',
          justifyContent: 'center',
          alignItems: 'center',
          [theme.breakpoints.up('md')]: { width: '70%' },
        }}
      >
        <Picture path={picture} height={'100%'} width={'80%'} />
      </div>
    </div>
  )
}

export function ButtonReserve() {
  return (
    <Button
      variant="contained"
      color="primary"
      size="large"
      css={{
        width: '150px',
        display: 'flex',
        margin: 'auto',
        marginTop: '20px',
        fontSize: '22px',
      }}
    >
      Reserve
    </Button>
  )
}
