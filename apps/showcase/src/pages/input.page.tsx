import { lazy } from 'react'

import Frame from '../components/frame'

const InputContainer = lazy(() => import('./container/input'))

export function InputPage() {
  return (
    <Frame
      title="Inputs"
      css={{
        padding: '80px',
      }}
      id="inputs"
      Page={InputContainer}
    />
  )
}
