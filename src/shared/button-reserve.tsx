import Button from '@material-ui/core/Button'
import React from 'react'
import { theme } from '../config/theme'

export function ButtonReserve() {
  return (
    <Button
      variant="contained"
      color="primary"
      size="large"
      css={{
        display: 'flex',
        margin: 'auto',
        marginTop: '20px',
        fontSize: '18px',
        [theme.breakpoints.up('md')]: {
          fontSize: '20px',
          marginBottom: '25px',
        },
      }}
    >
      Reserve
    </Button>
  )
}
