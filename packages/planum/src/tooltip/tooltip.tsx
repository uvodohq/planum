import { TooltipContext } from './tooltip-context'
import type { UseTooltipProps } from './use-tooltip'
import { useTooltip } from './use-tooltip'

export type TooltipProps = React.PropsWithChildren<UseTooltipProps>

export function Tooltip({ children, ...options }: TooltipProps) {
  const tooltip = useTooltip(options)

  return (
    <TooltipContext.Provider value={tooltip}>
      {children}
    </TooltipContext.Provider>
  )
}
