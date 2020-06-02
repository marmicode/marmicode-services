import Button from '@material-ui/core/Button'
import React from 'react'

export function ButtonReserve() {
  return (
    <Button
      variant="contained"
      color="primary"
      size="large"
      css={{
        width: '150px',
        display: 'flex',
        margin: 'auto',
        marginTop: '20px',
        fontSize: '22px',
      }}
    >
      Reserve
    </Button>
  )
}
