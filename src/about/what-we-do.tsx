import React from 'react'

export function WhatWeDo({ title, children }) {
  return (
    <>
      <div
        css={{
          width: '400px',
          height: '300px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'start',
          paddingLeft: '15px',
          margin: '20px',
          textAlign: 'center',
        }}
      >
        <h2 css={{ display: 'flex', margin: 'auto' }}>{title}</h2>
        <p css={{ width: '400px' }}>{children}</p>
      </div>
    </>
  )
}
