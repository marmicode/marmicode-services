import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import React from 'react'
import { theme } from '../config/theme'
import { LandingSection } from './landing-section'
import { css } from '@emotion/core'

export function NewsSection() {
  return (
    <LandingSection title={'Subscribe to our newsletter'}>
      <div css={{ display: 'flex', flexDirection: 'column', margin: '10px' }}>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          css={{
            width: '100%',
            marginBottom: '15px',
            [theme.breakpoints.up('md')]: {
              width: '600px',
            },
          }}
        />
        <div
          css={css({
            display: 'flex',
            flexDirection: 'column',
            [theme.breakpoints.up('md')]: {
              flexDirection: 'row',
            },
          })}
        >
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
          <Button
            variant="outlined"
            color="primary"
            css={{
              width: '120px',
              marginTop: '10px',
              [theme.breakpoints.up('md')]: {
                marginLeft: '10px',
                marginTop: '0px',
              },
            }}
          >
            Confirm
          </Button>
        </div>
        <p css={{ fontSize: '14px' }}>
          *En renseignant votre adresse mail vous affirmez avoir pris
          connaissance de la politique de confidentialité.
        </p>
      </div>
    </LandingSection>
  )
}
