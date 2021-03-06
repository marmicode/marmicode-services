import { PageSection } from '../shared/page-section'
import { css } from '@emotion/core'
import { theme } from '../config/theme'
import { PublicationSection } from '../shared/publication-section'
import CardActionArea from '@material-ui/core/CardActionArea'
import Button from '@material-ui/core/Button'
import React from 'react'

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

        <div
          css={{
            [theme.breakpoints.up('md')]: {
              width: '50%',
            },
          }}
        >
          <PublicationSection picture={'landing/talk2.png'}>
            Boost Your Time to Market by Dancing the Limbo | AngualrUP 2019{' '}
          </PublicationSection>
        </div>
      </div>
      <div
        css={css({
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          flex: 1,
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

        <div
          css={{
            [theme.breakpoints.up('md')]: {
              width: '50%',
            },
          }}
        >
          <PublicationSection picture={'landing/talk2.png'}>
            Boost Your Time to Market by Dancing the Limbo | AngualrUP 2019{' '}
          </PublicationSection>
        </div>
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
