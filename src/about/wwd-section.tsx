import { WhatWeDo } from './what-we-do'
import React from 'react'

export function WwdSection() {
  return (
    <>
      <div
        css={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
        }}
      >
        <WhatWeDo title={'Workshops'}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          magna aliquyam erat,magna aliquyam erat,
        </WhatWeDo>
        <WhatWeDo title={'Consulting'}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        </WhatWeDo>
        <WhatWeDo title={'Code review'}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        </WhatWeDo>
      </div>
    </>
  )
}
