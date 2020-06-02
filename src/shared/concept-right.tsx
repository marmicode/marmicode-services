import { theme } from '../config/theme'
import { Picture } from './picture'
import React from 'react'

export function ConceptRight({ title, children, picture }) {
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
          alignItems: 'center',
        },
      }}
    >
      <div
        css={{
          paddingRight: '15px',
          textAlign: 'right',
          width: '80%',
          [theme.breakpoints.down('md')]: {
            textAlign: 'left',
            order: 2,
            width: '300px',
            paddingRight: '0px',
            margin: 'auto',
          },
        }}
      >
        <h2>{title}</h2>
        <p
          css={{
            fontSize: '15px',
            [theme.breakpoints.up('md')]: { fontSize: '20px' },
          }}
        >
          {children}
        </p>
      </div>
      <div
        css={{
          width: '100%',
          display: 'flex',
          margin: 'auto',
          justifyContent: 'center',
          alignItems: 'center',
          [theme.breakpoints.up('md')]: { width: '70%' },
        }}
      >
        <Picture path={picture} height={'100%'} width={'80%'} />
      </div>
    </div>
  )
}
