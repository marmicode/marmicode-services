import { css } from '@emotion/core'
import React from 'react'
import { marmicodePrimaryColor } from '../config/config'

export const ExternalLink = ({ href, content }: { href: string; content }) => {
  return (
    <a
      css={css({ color: 'white', textDecoration: 'none' })}
      href={href}
      target="_blank"
    >
      {content}
    </a>
  )
}

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
        padding: '10px',
        backgroundColor: marmicodePrimaryColor,
        justifyContent: 'center',
      }}
    >
      {footerItems.map(item => (
        <div
          css={css({
            alignItems: 'center',
            color: 'white',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            margin: '0 20px',
          })}
          key={item.icon}
        >
          <i
            className="material-icons"
            css={{
              fontSize: '28px',
              marginRight: '10px',
            }}
          >
            {item.icon}
          </i>
          <span css={{ color: 'white' }}>{item.content}</span>
        </div>
      ))}
    </footer>
  )
}
