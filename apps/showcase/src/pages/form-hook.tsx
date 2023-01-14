import { lazy } from 'react'

import Frame from '../components/frame'

const FormHookContainer = lazy(() => import('./container/form-hook'))

export function FormHookPage() {
  return (
    <Frame
      title="Form Hook (DEV)"
      css={{
        p: 80,
        pb: 300,
      }}
      id="form"
      Page={FormHookContainer}
    />
  )
}
