import { useId } from '@floating-ui/react'
import * as React from 'react'

import { useDialogState } from './use-dialog-state'

export const DialogDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLProps<HTMLParagraphElement>
>((props, ref) => {
  const { children, ...rest } = props
  const { setDescriptionId } = useDialogState()
  const id = useId()

  // Only sets `aria-describedby` on the Dialog root element
  // if this component is mounted inside it.
  React.useLayoutEffect(() => {
    setDescriptionId(id)

    return () => setDescriptionId(undefined)
  }, [id, setDescriptionId])

  return (
    <p {...rest} ref={ref} id={id}>
      {children}
    </p>
  )
})

DialogDescription.displayName = 'DialogDescription'
