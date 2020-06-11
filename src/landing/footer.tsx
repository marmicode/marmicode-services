import React from 'react'
import { theme } from '../config/theme'
import { Picture } from '../shared/picture'

export function Footer() {
  return (
    <footer
      css={{ display: 'flex', padding: '25px', backgroundColor: 'white' }}
    >
      <Picture width={'90px'} height={'90px'} path={'icon.png'} />
      <div
        css={{
          display: 'flex',
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-around',
          fontSize: '12px',
          [theme.breakpoints.up('md')]: {
            fontSize: '16px',
          },
        }}
      >
        <div>
          <h3>CONTACT</h3>
          <p>younes@marmicode.io</p>
          <p>+33 (0) 4 26 83 61 92 </p>
        </div>
        <div>
          <h3>INFORMATIONS</h3>
          <p>Privacy policy</p>
          <p>Personal data</p>
        </div>
      </div>
    </footer>
  )
}
