import React from 'react'
import { ExternalLink } from '../components/landing/contact'
import { marmicodePrimaryColor } from '../config/config'

export function Footer() {
  const email = 'kitchen@marmicode.io'

  const footerItems = [
    {
      icon: 'email',
      content: <ExternalLink href={`mailto:${email}`} content={email} />,
    },
    {
      icon: 'phone',
      content: (
        <ExternalLink
          href="tel:+33 (0) 4 26 83 61 92"
          content="+33 (0) 4 26 83 61 92"
        />
      ),
    },
  ]

  return (
    <footer
      css={{
        display: 'flex',
        padding: '25px',
        backgroundColor: '#fbfbfb',
        paddingTop: '10px',
        justifyContent: 'center',
      }}
    >
      {footerItems.map(item => (
        <div
          css={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            margin: '0 20px',
          }}
          key={item.icon}
        >
          <i
            className="material-icons"
            style={{
              color: marmicodePrimaryColor,
              fontSize: '28px',
              marginRight: '10px',
            }}
          >
            {item.icon}
          </i>
          {item.content}
        </div>
      ))}
    </footer>
  )
}
