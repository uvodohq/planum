import { lazy } from 'react'

import Frame from '../components/frame'

const TextareaContainer = lazy(() => import('./container/textarea'))

export function TextareaPage() {
  return (
    <Frame
      title="Textarea"
      css={{
        padding: '80px',
      }}
      id="textarea"
      Page={TextareaContainer}
    />
  )
}
