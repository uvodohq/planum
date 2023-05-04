import { lazy } from 'react'

import Frame from '../components/frame'

const ButtonWhiteContainer = lazy(() => import('./container/button-white'))

export function ButtonWhitePage() {
  return (
    <Frame
      title="Button White"
      css={{
        bg: '$white',
        color: '$textDark',
        px: 80,
      }}
      Page={ButtonWhiteContainer}
    />
  )
}
