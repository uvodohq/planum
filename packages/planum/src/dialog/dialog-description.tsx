import { useId } from '@floating-ui/react'
import * as React from 'react'

import { styled } from '../theme'
import { useDialogState } from './use-dialog-state'

const StyledParagraph = styled('p', {
  fw: 'inherit',
  fontSize: 'inherit',
  m: 0,
})

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
    <StyledParagraph {...rest} ref={ref} id={id}>
      {children}
    </StyledParagraph>
  )
})

DialogDescription.displayName = 'DialogDescription'
