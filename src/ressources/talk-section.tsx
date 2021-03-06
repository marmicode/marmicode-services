import { PageSection } from '../shared/page-section'
import { css } from '@emotion/core'
import CardActionArea from '@material-ui/core/CardActionArea'
import { theme } from '../config/theme'
import { PublicationSection } from '../shared/publication-section'
import React from 'react'
import CardMedia from '@material-ui/core/CardMedia'

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
    </div>
  )
}
