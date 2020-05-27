import { css } from '@emotion/core'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import { Picture } from '../shared/picture'

export function PublicationSection({ picture, children }) {
  return (
    <Card
      elevation={10}
      css={css({
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        margin: '20px',
      })}
    >
      <CardContent css={{ textAlign: 'center' }}>
        <Picture path={picture} />
        <Typography variant="body2" color="textSecondary" component="p">
          {children}
        </Typography>
      </CardContent>
      <div css={css({ flex: 1 })} />
    </Card>
  )
}
