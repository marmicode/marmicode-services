import React from 'react'
import { marmicodeColor } from '../../config/config'

export const ContactSection = () => {
  const itemList = [
    {
      icon: 'email',
      content: 'contact@marmicode.fr',
    },
    {
      icon: 'phone',
      content: '+33 (0) 4 26 83 61 92',
    },
    {
      icon: 'office',
      content: (
        <div>
          <span>SIREN: 827 570 490</span>
          <span>VAT N°: FR 71 827570490</span> <span>69009 Lyon</span>
        </div>
      ),
    },
  ]

  return (
    <div>
      {itemList.map(item => (
        <div key={item.icon}>
          <i
            className="material-icons"
            style={{ color: marmicodeColor, fontSize: '48px' }}
          >
            {item.icon}
          </i>
          <span>{item.content}</span>
        </div>
      ))}
      <div></div>
    </div>
  )
}
