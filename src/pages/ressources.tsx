import { css } from '@emotion/core'
import Button from '@material-ui/core/Button'
import CardActionArea from '@material-ui/core/CardActionArea'
import React from 'react'
import { useTranslation } from 'react-i18next'
import Layout from '../components/layout'
import { theme } from '../config/theme'
import { Footer } from '../landing/footer'
import { PageSection } from '../landing/page-section'
import { PublicationSection } from '../landing/publication-section'
import { TitleWorkshop } from './workshops'

export default function RessourcesPage() {
  const { t } = useTranslation('workshop')

  return (
    <Layout title={t('Ressources')}>
      <TitleWorkshop title={'Ressources'} />
      <TalkSection />
      <VideoSection />
      <GuideSection />
      <Footer />
    </Layout>
  )
}

export function TalkSection() {
  return (
    <div>
      <PageSection title={'Talks'} />
      <div
        css={css({
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          flex: 1,
        })}
      >
        <CardActionArea
          css={{
            [theme.breakpoints.up('md')]: {
              width: '50%',
            },
          }}
        >
          <PublicationSection picture={'landing/talk1.png'}>
            White-labeling & A/B testing with interchangeable components |
            AngularConnect 2018{' '}
          </PublicationSection>
        </CardActionArea>

        <CardActionArea
          css={{
            [theme.breakpoints.up('md')]: {
              width: '50%',
            },
          }}
        >
          <PublicationSection picture={'landing/talk2.png'}>
            Boost Your Time to Market by Dancing the Limbo | AngualrUP 2019{' '}
          </PublicationSection>
        </CardActionArea>
      </div>
    </div>
  )
}

export function VideoSection() {
  return (
    <div>
      <PageSection title={'Videos'} />
      <div
        css={css({
          display: 'flex',
          flexDirection: 'row',
          flex: 1,
          flexWrap: 'wrap',
        })}
      >
        <div
          css={{
            [theme.breakpoints.up('md')]: {
              width: '50%',
            },
          }}
        >
          <PublicationSection picture={'landing/talk1.png'}>
            White-labeling & A/B testing with interchangeable components |
            AngularConnect 2018{' '}
          </PublicationSection>
        </div>

        <CardActionArea
          css={{
            [theme.breakpoints.up('md')]: {
              width: '50%',
            },
          }}
        >
          <PublicationSection picture={'landing/talk2.png'}>
            Boost Your Time to Market by Dancing the Limbo | AngualrUP 2019{' '}
          </PublicationSection>
        </CardActionArea>
      </div>
      <div
        css={css({
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          flex: 1,
        })}
      >
        <CardActionArea
          css={{
            [theme.breakpoints.up('md')]: {
              width: '50%',
            },
          }}
        >
          <PublicationSection picture={'landing/talk1.png'}>
            White-labeling & A/B testing with interchangeable components |
            AngularConnect 2018{' '}
          </PublicationSection>
        </CardActionArea>

        <CardActionArea
          css={{
            [theme.breakpoints.up('md')]: {
              width: '50%',
            },
          }}
        >
          <PublicationSection picture={'landing/talk2.png'}>
            Boost Your Time to Market by Dancing the Limbo | AngualrUP 2019{' '}
          </PublicationSection>
        </CardActionArea>
      </div>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        css={{
          color: 'white',
          display: 'flex',
          margin: 'auto',
          marginTop: '20px',
          fontSize: '10px',
          [theme.breakpoints.up('md')]: {
            fontSize: '15px',
          },
        }}
      >
        See more videos
      </Button>
    </div>
  )
}

export function GuideSection() {
  return (
    <div>
      <PageSection title={'Angular guide'} />
      <div
        css={css({
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
        })}
      >
        <CardActionArea css={{ width: '70%', display: 'flex', margin: 'auto' }}>
          <PublicationSection
            picture={'ressources/angular.png'}
          ></PublicationSection>
        </CardActionArea>
      </div>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        css={{
          color: 'white',
          display: 'flex',
          margin: 'auto',
          marginTop: '20px',
          fontSize: '10px',
          [theme.breakpoints.up('md')]: {
            fontSize: '15px',
          },
        }}
      >
        Access Angular guide
      </Button>
    </div>
  )
}
