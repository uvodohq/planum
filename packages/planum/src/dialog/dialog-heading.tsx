import { useId } from '@floating-ui/react'
import * as React from 'react'

import { styled } from '../theme'
import { useDialogState } from './use-dialog-state'

const StyledHeading = styled('h2', {
  fw: 'inherit',
  fontSize: 'inherit',
  m: 0,
})

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
    <StyledHeading {...props} ref={ref} id={id}>
      {children}
    </StyledHeading>
  )
})

DialogHeading.displayName = 'DialogHeading'
