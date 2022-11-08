import type { Placement } from '@floating-ui/react-dom-interactions'
import {
  autoUpdate,
  flip,
  offset,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useRole,
} from '@floating-ui/react-dom-interactions'

import type { UseTooltipState } from './use-tooltip-state'

export interface UseTooltipProps {
  label: string
  placement?: Placement
  children: JSX.Element
  isOpen?: boolean
  defaultIsOpen?: boolean
  onChange?: (isOpen: boolean) => void
  offsetValue?: Parameters<typeof offset>[0]
  strategy?: 'absolute' | 'fixed'
}

export type UseTooltip = ReturnType<typeof useTooltip>

export default function useTooltip(
  props: UseTooltipProps,
  state: UseTooltipState,
) {
  const { placement, offsetValue = 5 } = props

  const { x, y, reference, floating, strategy, context } = useFloating({
    placement,
    open: state.isOpen,
    onOpenChange: state.setOpen,
    middleware: [offset(offsetValue), flip()],
    whileElementsMounted: autoUpdate,
    strategy: props.strategy,
  })

  const { getReferenceProps, getFloatingProps } = useInteractions([
    useHover(context),
    useFocus(context),
    useRole(context, { role: 'tooltip' }),
    useDismiss(context),
  ])

  const floatingProps = getFloatingProps({
    ref: floating,
    style: {
      position: strategy,
      top: y ?? 0,
      left: x ?? 0,
      zIndex: 9,
    },
  })

  return {
    getReferenceProps,
    getFloatingProps,
    reference,
    floating,
    isOpen: open,
    x,
    y,
    strategy,
    floatingProps,
  }
}
