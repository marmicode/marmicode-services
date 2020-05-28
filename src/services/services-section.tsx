import { theme } from '../config/theme'
import { Picture } from '../shared/picture'
import Button from '@material-ui/core/Button'
import React from 'react'

export function ServicesSection({ picture, title, children }) {
  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '40px',
        [theme.breakpoints.up('md')]: {
          flexDirection: 'row',
          marginLeft: '0px',
        },
      }}
    >
      <Picture
        path={picture}
        height={'50%'}
        width={'50%'}
        css={{
          flexWrap: 'wrap',
        }}
      />
      <div css={{ padding: '5px' }}>
        <h1 css={{ textAlign: 'left' }}>{title}</h1>
        <p
          css={{
            fontSize: '20px',
            [theme.breakpoints.up('md')]: { fontSize: '30px' },
          }}
        >
          {children}
        </p>
        <Button variant="contained" color="primary" size="large">
          See more
        </Button>
      </div>
    </div>
  )
}
