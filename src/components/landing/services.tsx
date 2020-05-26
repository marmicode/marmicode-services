import '@emotion/core'
import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { marmicodePrimaryColor } from '../../config/config'
import { mediaDesktop } from '../../helpers/media-selectors'
import { filterMarkdownFilesByLanguage } from '../../config/i18n'

export interface ServiceData {
  icon: string
  title: string
  html: string
  button?: {
    title: string
    url: string
  }
}

export const Service = ({ service }: { service: ServiceData }) => {
  return (
    <div
      css={{
        color: '#444',
        display: 'flex',
        flexDirection: 'column',
        fontWeight: 300,
        fontFamily: '"Source Sans Pro",Arial,sans-serif',
        margin: '20px',
        [mediaDesktop]: {
          borderRadius: '30px',
          boxShadow: '0 0 5px 0 rgba(163, 174, 184, 0.6)',
          padding: '10px',
          width: '300px',
        },
      }}
    >
      <i
        className="material-icons"
        style={{ color: marmicodePrimaryColor, fontSize: '48px' }}
      >
        {service.icon}
      </i>
      <h3
        css={{
          fontWeight: 500,
          fontSize: '1.5em',
        }}
      >
        {service.title}
      </h3>
      <div
        css={{
          textAlign: 'justify',
        }}
        dangerouslySetInnerHTML={{ __html: service.html }}
      ></div>

      <div css={{ flex: 1 }}></div>

      {service.button && (
        <a css={{ marginBottom: '20px' }} href={service.button.url}>
          <button
            css={{
              boxShadow:
                '0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12)',
              backgroundColor: marmicodePrimaryColor,
              border: 'none',
              borderRadius: '4px',
              color: 'white',
              cursor: 'pointer',
              fontSize: '1em',
              fontWeight: 600,
              lineHeight: '36px',
              textTransform: 'uppercase',
            }}
          >
            {service.button.title}
          </button>
        </a>
      )}
    </div>
  )
}
export const ServicesSection = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { glob: "**/content/services/*.md" } }
        sort: { fields: [fileAbsolutePath] }
      ) {
        edges {
          node {
            fileAbsolutePath
            frontmatter {
              icon
              title
              button {
                title
                url
              }
            }
            html
          }
        }
      }
    }
  `)

  const serviceList: ServiceData[] = filterMarkdownFilesByLanguage(data).map(
    node => ({
      icon: node.frontmatter.icon,
      title: node.frontmatter.title,
      html: node.html,
      button: node.frontmatter.button,
    })
  )

  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'stretch',
        justifyContent: 'space-around',
        [mediaDesktop]: {
          marginTop: '50px',
        },
      }}
    >
      {serviceList.map(service => (
        <Service key={service.title} service={service} />
      ))}
    </div>
  )
}
