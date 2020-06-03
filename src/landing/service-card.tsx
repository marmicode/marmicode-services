import { css } from '@emotion/core'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import { Picture } from '../shared/picture'

export function ServiceCard({ title, picture, children }) {
  return (
    <Card
      elevation={10}
      css={css({
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        margin: '20px',
        minWidth: '300px',
      })}
    >
      <CardContent css={{ textAlign: 'center' }}>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <Picture path={picture} />
        <Typography variant="body2" color="textSecondary" component="p">
          {children}
        </Typography>
      </CardContent>
      <div css={css({ flex: 1 })} />
      <CardActions>
        <Button
          variant="contained"
          size="large"
          color="primary"
          css={{ margin: 'auto', width: '100%' }}
        >
          Learn more
        </Button>
      </CardActions>
    </Card>
  )
}
