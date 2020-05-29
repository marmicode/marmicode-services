import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import React from 'react'
import { theme } from '../config/theme'

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
          display: 'flex',
          margin: 'auto',
          marginBottom: '20px',
          width: '100%',
          [theme.breakpoints.up('md')]: {
            width: '50%',
          },
        }}
        id="outlined-textarea"
        label="E-mail"
        placeholder="E-mail"
        multiline
        variant="outlined"
      />
      <TextField
        css={{
          display: 'flex',
          margin: 'auto',
          marginBottom: '20px',
          width: '100%',
          [theme.breakpoints.up('md')]: {
            width: '50%',
          },
        }}
        id="outlined-textarea"
        label="Name"
        placeholder="Name"
        multiline
        variant="outlined"
      />
      <TextField
        css={{
          display: 'flex',
          margin: 'auto',
          marginBottom: '20px',
          width: '100%',
          [theme.breakpoints.up('md')]: {
            width: '50%',
          },
        }}
        id="outlined-textarea"
        label="Company"
        placeholder="Company"
        multiline
        variant="outlined"
      />
      <TextField
        css={{
          display: 'flex',
          margin: 'auto',
          marginBottom: '20px',
          width: '100%',
          [theme.breakpoints.up('md')]: {
            width: '50%',
          },
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
          display: 'flex',
          margin: 'auto',
          marginBottom: '20px',
          width: '100%',
          [theme.breakpoints.up('md')]: {
            width: '50%',
          },
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
