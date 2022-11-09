import { lazy } from 'react'

import Frame from '../components/frame'

const EditorContainer = lazy(() => import('./container/editor'))

export function EditorPage() {
  return (
    <Frame
      title="Text Editor"
      css={{
        color: '$textDark',
        px: 80,
      }}
      id="editor"
      Page={EditorContainer}
    />
  )
}
