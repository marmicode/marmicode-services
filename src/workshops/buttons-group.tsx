import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'
import React from 'react'

export function ButtonsGroup() {
  return (
    <ButtonGroup
      disableElevation
      variant="outlined"
      color="primary"
      size={'medium'}
      css={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '15px',
      }}
    >
      <Button>Reserve</Button>
      <Button>More details</Button>
    </ButtonGroup>
  )
}
