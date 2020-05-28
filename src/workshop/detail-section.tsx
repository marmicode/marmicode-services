import { theme } from '../config/theme'
import React from 'react'

export function DetailsSection() {
  return (
    <>
      <h1
        css={{
          backgroundColor: '#380030',
          color: 'white',
          display: 'flex',
          height: '100px',
          width: '97%',
          alignItems: 'center',
          paddingLeft: '15px',
          fontSize: '24px',
          [theme.breakpoints.up('md')]: {
            fontSize: '30px',
            width: '100%',
          },
        }}
      >
        Angular Unit-Testing Workshop- Fundamental & test-driven development
      </h1>

      <div
        css={{
          borderBottom: 'solid',
          borderBottomColor: '#380030',
          paddingLeft: '15px',
        }}
      >
        <h2>Description</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </p>
      </div>

      <div
        css={{
          borderBottom: 'solid',
          borderBottomColor: '#380030',
          paddingLeft: '15px',
        }}
      >
        <h2>Objectives</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </p>
      </div>
      <div
        css={{
          borderBottom: 'solid',
          borderBottomColor: '#380030',
          paddingLeft: '15px',
        }}
      >
        <h2>Place</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </p>
      </div>
      <div
        css={{
          borderBottom: 'solid',
          borderBottomColor: '#380030',
          paddingLeft: '15px',
        }}
      >
        <h2>Déroulement de la journée</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </p>
      </div>
      <div
        css={{
          borderBottom: 'solid',
          borderBottomColor: '#380030',
          paddingLeft: '15px',
        }}
      >
        <h2>Requirement</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </p>
      </div>
      <div
        css={{
          borderBottom: 'solid',
          borderBottomColor: '#380030',
          paddingLeft: '15px',
        }}
      >
        <h2>Program</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </p>
      </div>
      <div
        css={{
          borderBottom: 'solid',
          borderBottomColor: '#380030',
          paddingLeft: '15px',
        }}
      >
        <h2>The coach</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </p>
      </div>
    </>
  )
}
