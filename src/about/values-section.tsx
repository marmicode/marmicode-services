import React from 'react'

export function ValuesSection() {
  return (
    <>
      <h1 css={{ fontSize: '60px', marginLeft: '40px', color: '#380030' }}>
        {' '}
        Our values.
      </h1>
      <div>
        <h1
          css={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          Share
        </h1>
        <h1
          css={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          Support
        </h1>
        <h1
          css={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          I don't know
        </h1>
      </div>
    </>
  )
}
