import { NodeViewWrapper } from '@tiptap/react'
import React from 'react'

// eslint-disable-next-line react/display-name
export default (props: any) => {
  console.warn('props', props)

  const handler = (mouseDownEvent: React.MouseEvent<HTMLImageElement>) => {
    const parent = (mouseDownEvent.target as HTMLElement).closest(
      '.image-resizer',
    )
    const image = parent?.querySelector('img.postimage') ?? null
    if (image === null) return
    const startSize = { x: image.clientWidth, y: image.clientHeight }
    const startPosition = { x: mouseDownEvent.pageX, y: mouseDownEvent.pageY }

    function onMouseMove(mouseMoveEvent: MouseEvent) {
      props?.updateAttributes({
        width: startSize.x - startPosition.x + mouseMoveEvent.pageX,
        height: startSize.y - startPosition.y + mouseMoveEvent.pageY,
        src: 'https://images.pexels.com/photos/6054896/pexels-photo-6054896.jpeg',
      })
    }
    function onMouseUp() {
      document.body.removeEventListener('mousemove', onMouseMove)
    }

    document.body.addEventListener('mousemove', onMouseMove)
    document.body.addEventListener('mouseup', onMouseUp, { once: true })
  }
  return (
    <NodeViewWrapper className="image-resizer">
      {props?.extension?.options?.useFigure ? (
        <figure>
          <img {...props?.node?.attrs} className="postimage" />
        </figure>
      ) : (
        <img {...props?.node?.attrs} className="postimage" />
      )}
      <div className="resize-trigger" onMouseDown={handler}>
        {props?.extension?.options?.resizeIcon}
      </div>
    </NodeViewWrapper>
  )
}
