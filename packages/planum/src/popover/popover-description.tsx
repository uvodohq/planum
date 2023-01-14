import { useId } from '@floating-ui/react'
import * as React from 'react'

import { styled } from '../theme'
import { usePopoverState } from './use-popover-state'

const StyledParagraph = styled('p', {
  fw: 'inherit',
  fontSize: 'inherit',
  m: 0,
})

export const PopoverDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLProps<HTMLParagraphElement>
>((props, ref) => {
  const { children, ...rest } = props
  const { setDescriptionId } = usePopoverState()
  const id = useId()

  // Only sets `aria-describedby` on the Popover root element
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

PopoverDescription.displayName = 'PopoverDescription'
