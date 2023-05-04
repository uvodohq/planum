import { lazy } from 'react'

import Frame from '../components/frame'

const ImageContainer = lazy(() => import('./container/image'))

export function ImagePage() {
  return (
    <Frame
      title="Image"
      css={{
        color: '$textDark',
        px: 80,
      }}
      id="image"
      Page={ImageContainer}
    />
  )
}
