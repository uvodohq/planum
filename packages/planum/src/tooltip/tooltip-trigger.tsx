import { cloneElement } from 'react'
import { mergeRefs } from 'react-merge-refs'

import type { UseTooltip } from './use-tooltip'

interface TooltipTriggerProps {
  trigger: JSX.Element
  tooltip: UseTooltip
}

export const TooltipTrigger = (props: TooltipTriggerProps) => {
  const { tooltip, trigger } = props

  // Preserve the consumer's ref
  const ref = mergeRefs([tooltip.reference, (trigger as any).ref])

  return cloneElement(
    trigger,
    tooltip.getReferenceProps({ ref, ...trigger.props }),
  )
}
