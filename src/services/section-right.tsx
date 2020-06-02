import { theme } from '../config/theme'
import Button from '@material-ui/core/Button'
import { Picture } from '../shared/picture'
import React from 'react'

export function SectionRight({ title, children, picture }) {
  return (
    <div
      css={{
        display: 'flex',
        justifyContent: 'flex-end',
        flexDirection: 'column',
        marginBottom: '40px',
        [theme.breakpoints.up('md')]: {
          flexDirection: 'row',
          marginLeft: '0px',
        },
      }}
    >
      <div
        css={{
          paddingRight: '15px',
          textAlign: 'right',
          [theme.breakpoints.down('md')]: {
            textAlign: 'left',
            order: 2,
          },
        }}
      >
        <h1>{title}</h1>
        <p
          css={{
            fontSize: '15px',
            [theme.breakpoints.up('md')]: { fontSize: '25px' },
          }}
        >
          {children}
        </p>
        <Button
          variant="contained"
          color="primary"
          size="large"
          css={{
            display: 'flex',
            marginLeft: '0px',
            [theme.breakpoints.up('md')]: { marginLeft: 'auto' },
          }}
        >
          See more
        </Button>
      </div>
      <Picture
        path={picture}
        height={'40%'}
        width={'40%'}
        css={{
          flexWrap: 'wrap',

          [theme.breakpoints.up('md')]: {},
        }}
      />
    </div>
  )
}
