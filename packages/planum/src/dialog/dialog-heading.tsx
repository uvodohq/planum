import { useId } from '@floating-ui/react-dom-interactions'
import * as React from 'react'

import { useDialogState } from './use-dialog-state'

export const DialogHeading = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLProps<HTMLHeadingElement>
>(({ children, ...props }, ref) => {
  const { setLabelId } = useDialogState()
  const id = useId()

  // Only sets `aria-labelledby` on the Dialog root element
  // if this component is mounted inside it.
  React.useLayoutEffect(() => {
    setLabelId(id)
    return () => setLabelId(undefined)
  }, [id, setLabelId])

  return (
    <h2 {...props} ref={ref} id={id}>
      {children}
    </h2>
  )
})

DialogHeading.displayName = 'DialogHeading'
