import type { Placement } from '@floating-ui/react'
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
} from '@floating-ui/react'
import { useMemo, useState } from 'react'

export interface UseTooltipProps {
  placement?: Placement
  open?: boolean
  onOpenChange?: (open: boolean) => void
  offsetValue?: Parameters<typeof offset>[0]
  defaultIsOpen?: boolean
  strategy?: 'absolute' | 'fixed'
}

export function useTooltip(props: UseTooltipProps = {}) {
  const {
    placement = 'top',
    open: controlledOpen,
    onOpenChange: setControlledOpen,
    offsetValue = 5,
    defaultIsOpen = false,
    strategy = 'absolute',
  } = props

  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultIsOpen)

  const open = controlledOpen ?? uncontrolledOpen
  const setOpen = setControlledOpen ?? setUncontrolledOpen

  const data = useFloating({
    placement,
    open,
    strategy,
    onOpenChange: setOpen,
    whileElementsMounted: autoUpdate,
    middleware: [offset(offsetValue), flip()],
  })

  const context = data.context

  const hover = useHover(context, {
    move: false,
    enabled: controlledOpen == null,
  })
  const focus = useFocus(context, {
    enabled: controlledOpen == null,
  })
  const dismiss = useDismiss(context)
  const role = useRole(context, { role: 'tooltip' })

  const interactions = useInteractions([hover, focus, dismiss, role])

  return useMemo(
    () => ({
      open,
      setOpen,
      ...interactions,
      ...data,
    }),
    [open, setOpen, interactions, data],
  )
}
