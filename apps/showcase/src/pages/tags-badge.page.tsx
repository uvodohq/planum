import { lazy } from 'react'

import Frame from '../components/frame'

const TagsBadgeContainer = lazy(() => import('./container/tags-badge'))

export function TagsBadgePage() {
  return (
    <Frame
      title="Tags/Badge"
      css={{
        p: 80,
        pb: 300,
      }}
      id="tags"
      Page={TagsBadgeContainer}
    />
  )
}
