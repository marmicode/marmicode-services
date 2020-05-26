import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import React from 'react'
import { theme } from '../config/theme'
import { LandingSection } from './landing-section'

export function NewsSection() {
  return (
    <LandingSection title={'Subscribe to our newsletter'}>
      <div css={{ display: 'flex', flexDirection: 'column', margin: '10px' }}>
        <form autoComplete="off">
          <TextField
            id="outlined-basic"
            label="E-mail"
            variant="outlined"
            css={{
              width: '100%',
              [theme.breakpoints.up('md')]: {
                width: '600px',
              },
            }}
          />
        </form>
        <p css={{ fontSize: '14px' }}>
          *En renseignant votre adresse mail vous affirmez avoir pris
          connaissance de la politique de confidentialité
        </p>
        <Button variant="outlined" color="primary" css={{ width: '120px' }}>
          Confirm
        </Button>
      </div>
    </LandingSection>
  )
}
