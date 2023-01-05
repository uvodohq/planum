import { TooltipPopup } from './tooltip-popup'
import { TooltipTrigger } from './tooltip-trigger'
import type { UseTooltipProps } from './use-tooltip'
import useTooltip from './use-tooltip'
import useTooltipState from './use-tooltip-state'

export interface TooltipProps extends UseTooltipProps {}

export const Tooltip = (props: TooltipProps) => {
  const { children, label } = props

  const state = useTooltipState(props)
  const tooltip = useTooltip(props, state)

  return null

  return (
    <>
      <TooltipTrigger trigger={children} tooltip={tooltip} />
      <TooltipPopup state={state} tooltip={tooltip} label={label} />
    </>
  )
}
