import { lazy } from 'react'

import Frame from '../components/frame'

const ColorsContainer = lazy(() => import('./container/color'))

export function ColorsPage() {
  return (
    <Frame
      title="Colors"
      css={{
        px: 80,
      }}
      id="colors"
      Page={ColorsContainer}
    />
  )
}
