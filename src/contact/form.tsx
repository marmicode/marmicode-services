import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import React from 'react'

export function Form() {
  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center,',
      }}
    >
      <TextField
        css={{
          width: '50%',
          display: 'flex',
          margin: 'auto',
          marginBottom: '20px',
        }}
        id="outlined-textarea"
        label="E-mail"
        placeholder="E-mail"
        multiline
        variant="outlined"
      />
      <TextField
        css={{
          width: '50%',
          display: 'flex',
          margin: 'auto',
          marginBottom: '20px',
        }}
        id="outlined-textarea"
        label="Name"
        placeholder="Name"
        multiline
        variant="outlined"
      />
      <TextField
        css={{
          width: '50%',
          display: 'flex',
          margin: 'auto',
          marginBottom: '20px',
        }}
        id="outlined-textarea"
        label="Company"
        placeholder="Company"
        multiline
        variant="outlined"
      />
      <TextField
        css={{
          width: '50%',
          display: 'flex',
          margin: 'auto',
          marginBottom: '20px',
        }}
        id="outlined-number"
        label="Number"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
      />
      <TextField
        css={{
          width: '50%',
          display: 'flex',
          margin: 'auto',
          marginBottom: '20px',
        }}
        id="outlined-multiline-static"
        label="Message"
        multiline
        rows={4}
        variant="outlined"
      />
      <Button
        variant="contained"
        color="primary"
        css={{ width: '120px', display: 'flex', margin: 'auto' }}
      >
        Confirm
      </Button>
    </div>
  )
}