import { lazy } from 'react'

import Frame from '../components/frame'

const TypographyContainer = lazy(() => import('./container/typography'))

export function TypographyPage() {
  return (
    <Frame
      title="Typography"
      css={{
        color: '$textDark',
        px: 80,
      }}
      id="text"
      Page={TypographyContainer}
    />
  )
}
