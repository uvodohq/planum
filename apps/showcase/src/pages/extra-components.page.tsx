import { lazy } from 'react'

import Frame from '../components/frame'

const ExtraContainer = lazy(() => import('./container/extra'))

export function ExtraComponentsPage() {
  return (
    <Frame
      title="Extra Components"
      css={{
        color: '$textDark',
        px: 80,
      }}
      id="extra"
      Page={ExtraContainer}
    />
  )
}
