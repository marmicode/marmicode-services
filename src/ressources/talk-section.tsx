import { PageSection } from '../landing/page-section'
import { css } from '@emotion/core'
import CardActionArea from '@material-ui/core/CardActionArea'
import { theme } from '../config/theme'
import { PublicationSection } from '../landing/publication-section'
import React from 'react'

export function TalkSection() {
  return (
    <div>
      <PageSection title={'Talks'}/>
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