import { css } from '@emotion/core'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import { theme } from '../config/theme'
import { DottyLine } from '../shared/dotty-line'

export function LandingSection({
  children,
  title,
}: {
  children
  title: string
}) {
  return (
    <section
      css={css({
        position: 'relative',
        backgroundColor: 'white',
        paddingTop: '30px',
      })}
    >
      <DottyLine />
      <Typography
        variant="h2"
        component="h2"
        gutterBottom
        color={'primary'}
        css={{
          padding: '30px',
          fontSize: '40px',
          [theme.breakpoints.up('md')]: {
            fontSize: '65px',
          },
        }}
      >
        {title}
      </Typography>
      <div
        css={css({
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          marginTop: '20px',
        })}
      >
        {children}
      </div>
    </section>
  )
}
