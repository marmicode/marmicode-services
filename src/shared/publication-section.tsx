import { css } from '@emotion/core'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import { Picture } from './picture'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'

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
        <CardActionArea>
          <CardMedia>
            {' '}
            <Picture path={picture} />
          </CardMedia>
          <Typography variant="body2" color="textSecondary" component="p">
            {children}
          </Typography>
        </CardActionArea>
      </CardContent>
      <div css={css({ flex: 1 })} />
    </Card>
  )
}
