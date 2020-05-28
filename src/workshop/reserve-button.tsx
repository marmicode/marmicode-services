import Button from '@material-ui/core/Button'
import React from 'react'

export function ReserveButton() {
  return (
    <Button
      variant="contained"
      color="primary"
      size="large"
      css={{
        display: 'flex',
        margin: 'auto',
        position: 'fixed',
      }}
    >
      Reserver
    </Button>
  )
}
