import '@emotion/core'
import { css } from '@emotion/core'
import { Button, TextField } from '@material-ui/core'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { marmicodeColor } from '../../config/config'
import { mediaDesktop } from '../../helpers/media-selectors'

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
      css={{
        display: 'flex',
        flexDirection: 'column',
        width: '90%',
        [mediaDesktop]: {
          maxWidth: '500px',
          width: '80%',
        },
      }}
      method="POST"
    >
      <TextField label="Email" name="_replyto" required type="text" />
      <TextField label="Name (optional)" name="name" type="text" />
      <TextField label="Company (optional)" name="company" type="text" />
      <TextField label="Phone (optional)" name="phone" type="text" />
      <TextField label="Message" name="message" multiline rows={3} required />

      <Button
        variant="contained"
        color="primary"
        style={{ backgroundColor: marmicodeColor }}
        type="submit"
      >
        Send
      </Button>
    </form>
  )
}

export const ContactSection = () => {
  const { t } = useTranslation('landing')

  const email = t('contact.email')

  const itemList = [
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

  const columnStyle = css({
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  })

  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
        marginTop: '50px',
        [mediaDesktop]: {
          flexDirection: 'row-reverse',
        },
      }}
    >
      {/* Contact form. */}
      <div css={columnStyle}>
        <ContactForm />
      </div>
      {/* Contact information. */}
      <div css={columnStyle}>
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
    </div>
  )
}
