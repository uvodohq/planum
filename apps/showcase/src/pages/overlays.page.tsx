import { lazy } from 'react'

import Frame from '../components/frame'

const OverlaysContainer = lazy(() => import('./container/overlays'))

export function OverlaysPage() {
  return (
    <Frame
      title="Overlays"
      css={{
        p: 80,
        pb: 300,
      }}
      id="overlays"
      Page={OverlaysContainer}
    />
  )
}
