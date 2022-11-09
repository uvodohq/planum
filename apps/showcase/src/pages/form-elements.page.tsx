import { lazy } from 'react'

import Frame from '../components/frame'

const FormElementsContainer = lazy(() => import('./container/form-element'))

export function FormElementsPage() {
  return (
    <Frame
      title="Form Elements"
      css={{
        p: 80,
        pb: 300,
      }}
      id="form"
      Page={FormElementsContainer}
    />
  )
}
