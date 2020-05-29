import { theme } from '../config/theme'
import React from 'react'

export function Comments({ name, workshop, children }) {
  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        borderTop: 'solid 1px',
        borderColor: '#380030',
        [theme.breakpoints.up('sm')]: {
          width: '45%',
          border: 'solid 1px',
          marginTop: '10px',
        },
      }}
    >
      <div css={{ paddingLeft: '20px' }}>
        <h2 css={{ color: '#380030' }}>{name}</h2>
      </div>
      <div css={{ paddingLeft: '20px' }}>
        <p css={{ color: '#5DB3AD' }}> Workshop: {workshop}</p>
        <p>{children}</p>
      </div>
    </div>
  )
}
