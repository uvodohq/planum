import { lazy } from 'react'

import Frame from '../components/frame'

const IconsContainer = lazy(() => import('./container/icons'))

export function IconsPage() {
  return (
    <Frame
      title="Icons"
      css={{
        padding: '80px',
      }}
      id="icons"
      Page={IconsContainer}
    />
  )
}
