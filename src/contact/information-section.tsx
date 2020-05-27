import { PageSection } from '../landing/page-section'
import { theme } from '../config/theme'
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail'
import PhoneIcon from '@material-ui/icons/Phone'
import PlaceIcon from '@material-ui/icons/Place'
import WorkIcon from '@material-ui/icons/Work'
import React from 'react'

export function InformationSection() {
  return (
    <PageSection title={'Informations'}>
      <div
        css={{
          display: 'flex',
          margin: 'auto',
          flexDirection: 'column',
          fontSize: '12px',
          justifyContent: 'center',
          [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
            fontSize: '15px',
          },
        }}
      >
        <div
          css={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          <div
            css={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <AlternateEmailIcon color="primary" />
            <h3 css={{ marginLeft: '15px' }}>camijote@marmicode.fr</h3>
          </div>
          <div
            css={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <PhoneIcon color="primary" />
            <h3 css={{ marginLeft: '15px' }}>+33 (0) 4 26 83 61 92</h3>
          </div>
          <div
            css={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <PlaceIcon color="primary" />
            <h3 css={{ marginLeft: '15px' }}>Lyon</h3>
          </div>
        </div>
        <div>
          <div
            css={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              paddingLeft: '0px',
              margin: 'auto',
              [theme.breakpoints.up('md')]: {
                paddingLeft: '80px',
              },
            }}
          >
            <div
              css={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}
            >
              <WorkIcon color="primary" />
              <h3 css={{ marginLeft: '15px' }}>Wishtack</h3>
            </div>
            <h3>SIREN: 827 570 490</h3>
            <h3>VAT N°: FR 71 827570490</h3>
          </div>
        </div>
      </div>
    </PageSection>
  )
}
