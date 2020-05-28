import { css } from '@emotion/core'
import Button from '@material-ui/core/Button'
import CardActionArea from '@material-ui/core/CardActionArea'
import React from 'react'
import { PageSection } from '../shared/page-section'
import { PublicationSection } from '../shared/publication-section'

export function TalksSection() {
  return (
    <PageSection title={'Talks & publications'}>
      <div css={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <div
          css={css({
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
          })}
        >
          <CardActionArea css={{ width: '50%' }}>
            <PublicationSection picture={'landing/talk1.png'}>
              White-labeling & A/B testing with interchangeable components |
              AngularConnect 2018{' '}
            </PublicationSection>
          </CardActionArea>

          <CardActionArea css={{ width: '50%' }}>
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
          })}
        >
          <CardActionArea css={{ width: '50%' }}>
            <PublicationSection picture={'landing/blog.png'}>
              The blog
            </PublicationSection>
          </CardActionArea>
          <CardActionArea css={{ width: '50%' }}>
            <PublicationSection picture={'landing/recipes.png'}>
              All the recipes
            </PublicationSection>
          </CardActionArea>
        </div>

        <Button
          variant="contained"
          size="large"
          color="primary"
          css={{
            display: 'flex',
            margin: 'auto',
          }}
        >
          See more content
        </Button>
      </div>
    </PageSection>
  )
}
