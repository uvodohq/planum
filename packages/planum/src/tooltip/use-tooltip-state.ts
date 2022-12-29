import { useContext } from 'react'

import { TooltipContext } from './tooltip'

export const useTooltipState = () => {
  const context = useContext(TooltipContext)

  if (context == null) {
    throw new Error('Tooltip components must be wrapped in <Tooltip />')
  }

  return context
}
