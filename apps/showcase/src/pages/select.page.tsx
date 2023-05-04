import { lazy } from 'react'

import Frame from '../components/frame'

const SelectContainer = lazy(() => import('./container/select-demos'))

export function SelectPage() {
  return (
    <Frame
      title="Select"
      css={{
        p: 80,
        pb: 300,
      }}
      id="select"
      Page={SelectContainer}
    />
  )
}
