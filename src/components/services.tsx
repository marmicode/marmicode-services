import '@emotion/core'
import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { marmicodeColor } from '../config/config'

export interface ServiceData {
  icon: string
  title: string
  html: string
}

export const Service = ({ service }: { service: ServiceData }) => {
  return (
    <div
      css={{
        color: '#444',
        fontWeight: 300,
        fontFamily: '"Source Sans Pro",Arial,sans-serif',
        margin: '20px',
        '@media screen and (min-width: 768px)': {
          boxShadow: '7px 14px 25px 3px rgba(163, 174, 184, 0.4)',
          padding: '10px',
          width: '300px',
        },
      }}
    >
      <i
        className="material-icons"
        style={{ color: marmicodeColor, fontSize: '48px' }}
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
      <div dangerouslySetInnerHTML={{ __html: service.html }}></div>
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
            frontmatter {
              icon
              title
            }
            html
          }
        }
      }
    }
  `)

  const serviceList: ServiceData[] = data.allMarkdownRemark.edges.map(
    ({ node }) => ({
      icon: node.frontmatter.icon,
      title: node.frontmatter.title,
      html: node.html,
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
        '@media screen and (min-width: 768px)': {
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
