import { lazy } from 'react'

import Frame from '../components/frame'

const ButtonDarkContainer = lazy(() => import('./container/button-dark'))

export function ButtonDarkPage() {
  return (
    <Frame
      title="Button Dark"
      css={{
        bg: '$surface900',
        color: '$white',
        px: 80,
      }}
      id="buttons"
      Page={ButtonDarkContainer}
    />
  )
}
