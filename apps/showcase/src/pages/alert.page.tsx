import { lazy } from 'react'

import Frame from '../components/frame'

const AlertContainer = lazy(() => import('./container/alert'))

export function AlertPage() {
  return (
    <Frame
      title="Alert"
      css={{
        color: '$textDark',
        px: 80,
      }}
      id="alert"
      Page={AlertContainer}
    />
  )
}
