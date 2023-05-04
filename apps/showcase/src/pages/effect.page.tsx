import { lazy } from 'react'

import Frame from '../components/frame'

const EffectContainer = lazy(() => import('./container/effect'))

export function EffectPage() {
  return (
    <Frame
      title="Effects"
      css={{
        p: 80,
      }}
      id="effects"
      Page={EffectContainer}
    />
  )
}
