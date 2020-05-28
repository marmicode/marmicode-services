import Button from '@material-ui/core/Button'
import React from 'react'

export function CommentButton() {
  return (
    <Button
      href="#text-buttons"
      color="secondary"
      css={{
        display: 'flex',
        margin: 'auto',
        marginTop: '20px',
      }}
    >
      See all comments
    </Button>
  )
}
