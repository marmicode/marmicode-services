import React from 'react'
import { marmicodeColorWithOpacity } from '../../config/config'
import { mediaDesktop } from '../../helpers/media-selectors'

export const PublicationsSection = () => {
  const publicationList = [
    {
      title:
        'White-labeling & A/B testing with interchangeable components @AngularConnect',
      youtubeVideoId: 'nX_HhiqmFAI',
    },
    {
      title: 'Boost Your Time to Market by Dancing the Limbo @AngularUP',
      youtubeVideoId: 'izGz7H-8yIk',
    },
  ]

  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
        marginTop: '50px',
        minHeight: '90vh',
        justifyContent: 'space-around',
        [mediaDesktop]: {
          flexDirection: 'row',
          flexWrap: 'wrap',
          minHeight: 0,
        },
      }}
    >
      {publicationList.map(publication => (
        <div
          key={publication.title}
          css={{ [mediaDesktop]: { minWidth: '600px' } }}
        >
          <iframe
            css={{
              boxSizing: 'border-box',
              height: '30vh',
              width: '100vw',
              /* @hack fix white line between videos. */
              marginBottom: '-4px',
              [mediaDesktop]: {
                height: '50vh',
                width: '100%',
              },
            }}
            src={`https://www.youtube.com/embed/${publication.youtubeVideoId}`}
            frameBorder="0"
            allowFullScreen
          />
          <div
            css={{
              backgroundColor: marmicodeColorWithOpacity(0.8),
              boxShadow: '7px 14px 25px 3px rgba(163, 174, 184, 0.4)',
            }}
          >
            <h3
              css={{
                color: 'white',
                fontSize: '1em',
                fontWeight: 500,
                margin: 0,
                padding: '20px',
              }}
            >
              {publication.title}
            </h3>
          </div>
        </div>
      ))}
    </div>
  )
}
