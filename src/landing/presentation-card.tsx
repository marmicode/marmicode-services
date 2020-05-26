import { css } from '@emotion/core'
import React from 'react'
import { theme } from '../config/theme'
import { Person } from '../shared/person'

export function PresentationCard() {
  return (
    <Person name={'Younes Jaaidi'} picturePath={'younes.jpg'}>
      <div
        css={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '5px',
          flexDirection: 'column',
          alignItems: 'center',
          [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
            alignItems: 'start',
          },
        }}
      >
        <div>
          <h3>Google Developers Expert</h3>
          <p>For angular and Web Technologies</p>
        </div>
        <div css={css({ width: '160px' })} />
        <div>
          <h3>eXtreme Programming Coach</h3>
        </div>
      </div>
      <div
        css={{
          border: 'solid 2px black',
          minWidth: '30',
          height: '200px',
          margin: 'auto',
          marginBottom: '20px',
          textAlign: 'center',
        }}
      >
        Vidéo
      </div>
    </Person>
  )
}
