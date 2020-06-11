import { theme } from '../config/theme'
import { Picture } from './picture'
import React from 'react'

export function ConceptCard({ picture, title, children }) {
  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '40px',
        alignItems: 'center',
        [theme.breakpoints.up('md')]: {
          flexDirection: 'row',
          marginLeft: '0px',
        },
      }}
    >
      <div
        css={{
          width: '100%',
          display: 'flex',
          margin: 'auto',
          justifyContent: 'center',
          alignItems: 'center',
          [theme.breakpoints.up('md')]: { width: '50%' },
        }}
      >
        <Picture path={picture} height={'100%'} width={'80%'} />
      </div>

      <div
        css={{
          padding: '0px',
          width: '300px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          [theme.breakpoints.up('md')]: {
            width: '50%',
            padding: '5px',
            marginRight: '10px',
          },
        }}
      >
        <h2 css={{ textAlign: 'left' }}>{title}</h2>
        <p
          css={{
            fontSize: '15px',
            [theme.breakpoints.up('md')]: { fontSize: '20px' },
          }}
        >
          {children}
        </p>
      </div>
    </div>
  )
}
