import * as React from 'react'

import { PopoverContext } from './popover-context'

export const usePopoverState = () => {
  const context = React.useContext(PopoverContext)

  if (context == null) {
    throw new Error('Popover components must be wrapped in <Popover />')
  }

  return context
}
