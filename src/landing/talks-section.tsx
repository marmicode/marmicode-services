import { css } from '@emotion/core'
import Button from '@material-ui/core/Button'
import CardActionArea from '@material-ui/core/CardActionArea'
import React from 'react'
import { LandingSection } from './landing-section'
import { PublicationSection } from './publication-section'
import { theme } from '../config/theme'

export function TalksSection() {
  return (
    <LandingSection title={'Talks & publications'}>
      <div css={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <div
          css={css({
            display: 'flex',
            flexDirection: 'row',
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
          })}
        >
          <div
            css={{
              width: '100%',
              [theme.breakpoints.up('md')]: {
                width: '50%',
              },
            }}
          >
            <PublicationSection picture={'landing/blog.png'}>
              The blog
            </PublicationSection>
          </div>
          <div
            css={{
              width: '100%',
              [theme.breakpoints.up('md')]: {
                width: '50%',
              },
            }}
          >
            <PublicationSection picture={'landing/recipes.png'}>
              All the recipes
            </PublicationSection>
          </div>
        </div>

        <Button
          variant="contained"
          size="large"
          color="primary"
          css={{
            display: 'flex',
            margin: 'auto',
            marginBottom: '10px',
            [theme.breakpoints.up('md')]: {
              width: '30%',
            },
          }}
        >
          See more content
        </Button>
      </div>
    </LandingSection>
  )
}
