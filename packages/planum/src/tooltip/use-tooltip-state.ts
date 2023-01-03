import { useContext } from 'react'

import { TooltipContext } from './tooltip-context'

export const useTooltipState = () => {
  const context = useContext(TooltipContext)

  if (context == null) {
    throw new Error('Tooltip components must be wrapped in <Tooltip />')
  }

  return context
}
