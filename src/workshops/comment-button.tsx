import Button from '@material-ui/core/Button'
import React from 'react'
import { theme } from '../config/theme'

export function CommentButton() {
  return (
    <Button
      href="#text-buttons"
      color="secondary"
      css={{
        display: 'flex',
        margin: 'auto',
        width: '100%',
        marginTop: '20px',
        [theme.breakpoints.up('md')]: {
          width: '30%',
        },
      }}
    >
      See all comments
    </Button>
  )
}
