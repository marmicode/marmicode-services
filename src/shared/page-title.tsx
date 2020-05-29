import React from 'react'

export function PageTitle({ title }) {
  return (
    <h1
      css={{
        textAlign: 'center',
        color: '#380030',
        fontSize: '50px',
        textDecorationLine: 'underline',
        textDecorationColor: '#5DB3AD',
        marginTop: '40px',
      }}
    >
      {title}
    </h1>
  )
}
