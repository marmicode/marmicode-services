import { css } from '@emotion/core'
import React from 'react'

export function DottyLine() {
  const width = 60
  const style = css({
    borderBottom: '3px solid',
    float: 'left',
    margin: '20px 5px',
  })

  const itemList = [
    {
      color: '#380030',
      width,
    },
    {
      color: '#600053',
      width: width / 2,
    },
    {
      color: '#810070',
      width: width / 4,
    },
  ]

  return (
    <div>
      {itemList.map((item, index) => (
        <div
          key={index}
          css={[
            style,
            css({
              borderBottomColor: item.color,
              width: `${item.width}px`,
            }),
          ]}
        />
      ))}
    </div>
  )
}
