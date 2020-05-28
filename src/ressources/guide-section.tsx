import { PageSection } from '../shared/page-section'
import { css } from '@emotion/core'
import CardActionArea from '@material-ui/core/CardActionArea'
import { PublicationSection } from '../landing/publication-section'
import Button from '@material-ui/core/Button'
import { theme } from '../config/theme'
import React from 'react'

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
