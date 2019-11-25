import '@emotion/core'
import { Button, TextareaAutosize, TextField } from '@material-ui/core'
import React from 'react'
import { marmicodeColor } from '../../config/config'

export const ExternalLink = ({ href, content }: { href: string; content }) => {
  return (
    <a
      css={{ color: marmicodeColor, textDecoration: 'none' }}
      href={href}
      target="_blank"
    >
      {content}
    </a>
  )
}

export const ContactForm = () => {
  return (
    <form
      action="https://formspree.io/contact@wishtack.com"
      css={{ display: 'flex', flexDirection: 'column', maxWidth: '500px' }}
      method="POST"
    >
      <TextField label="Email" name="_replyto" required type="text" />
      <TextField label="Name (optional)" name="name" type="text" />
      <TextField label="Company (optional)" name="company" type="text" />
      <TextField label="Phone (optional)" name="phone" type="text" />
      <TextField label="Message" name="message" multiline rows={3} required />

      <Button variant="contained" color="primary" type="submit">
        Envoyer
      </Button>
    </form>
  )
}

export const ContactSection = () => {
  const itemList = [
    {
      icon: 'email',
      content: (
        <ExternalLink
          href="mailto:concat@marmicode.fr"
          content="contact@marmicode.fr"
        />
      ),
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
    {
      icon: 'map',
      content: 'Lyon',
    },
    {
      icon: 'business_center',
      content: (
        <div css={{ color: '#555', fontSize: '.8em', textAlign: 'left' }}>
          <div>Wishtack</div>
          <div>SIREN: 827 570 490</div>
          <div>VAT N°: FR 71 827570490</div>
        </div>
      ),
    },
  ]

  return (
    <div css={{ display: 'flex', flexDirection: 'row' }}>
      <div
        css={{
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '50px',
        }}
      >
        <div
          css={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
          }}
        >
          {itemList.map(item => (
            <div
              css={{
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: '10px',
              }}
              key={item.icon}
            >
              <i
                className="material-icons"
                style={{
                  color: marmicodeColor,
                  fontSize: '36px',
                  marginRight: '10px',
                }}
              >
                {item.icon}
              </i>
              {item.content}
            </div>
          ))}
        </div>
      </div>
      <div css={{ flex: 1 }}>
        <ContactForm />
      </div>
    </div>
  )
}
