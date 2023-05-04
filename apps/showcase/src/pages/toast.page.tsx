import { lazy } from 'react'

import Frame from '../components/frame'

const NotificationContainer = lazy(() => import('./container/toast'))

export function NotificationPage() {
  return (
    <Frame
      title="Toast"
      css={{
        p: 80,
      }}
      id="toast"
      Page={NotificationContainer}
    />
  )
}
