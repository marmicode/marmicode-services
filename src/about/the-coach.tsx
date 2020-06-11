import React from 'react'

export function TheCoach({ name, children }) {
  return (
    <div css={{ display: 'flex', justifyContent: 'space-around' }}>
      <div></div>

      <div
        css={{
          width: '50%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <h2>{name}</h2>
        <p>{children}</p>
      </div>
    </div>
  )
}
