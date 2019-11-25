import '@emotion/core'
import React from 'react'
import { marmicodeColor } from '../../config/config'

export const ContactSection = () => {
  const itemList = [
    {
      icon: 'email',
      content: (
        <a href="mailto:concat@marmicode.fr" target="_blank">
          concat@marmicode.fr
        </a>
      ),
    },
    {
      icon: 'phone',
      content: '+33 (0) 4 26 83 61 92',
    },
    {
      icon: 'house',
      content: (
        <div css={{ textAlign: 'left' }}>
          <div>SIREN: 827 570 490</div>
          <div>VAT N°: FR 71 827570490</div> <div>69009 Lyon</div>
        </div>
      ),
    },
  ]

  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {itemList.map(item => (
        <div
          css={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
          }}
          key={item.icon}
        >
          <i
            className="material-icons"
            style={{ color: marmicodeColor, fontSize: '48px' }}
          >
            {item.icon}
          </i>
          {item.content}
        </div>
      ))}
      <div></div>
    </div>
  )
}
