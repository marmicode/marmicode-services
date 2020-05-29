import Button from '@material-ui/core/Button'
import React from 'react'

export function ReserveButton() {
  return (
    <div css={{ display: 'flex', margin: 'auto', justifyContent: 'center' }}>
      <Button
        variant="contained"
        color="primary"
        size="large"
        css={{
          width: '20%',
          display: 'flex',
          justifyContent: 'center',
          position: 'fixed',
        }}
      >
        Reserver
      </Button>
    </div>
  )
}
