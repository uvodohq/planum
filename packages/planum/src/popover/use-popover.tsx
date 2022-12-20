import type {
  Placement,
  ReferenceType,
  UseFloatingReturn,
} from '@floating-ui/react-dom-interactions'
import {
  autoUpdate,
  flip,
  offset,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useFloatingNodeId,
  useInteractions,
  useRole,
} from '@floating-ui/react-dom-interactions'
import * as React from 'react'

export interface UsePopoverProps {
  initialOpen?: boolean
  open?: boolean
  onOpenChange?: (open: boolean) => void
  placement?: Placement
  modal?: boolean
}

export type UsePopoverReturn = {
  open: boolean
  setOpen(open: boolean): void
  labelId?: string
  modal?: boolean
  nodeId: string
  descriptionId?: string
  setLabelId: React.Dispatch<React.SetStateAction<string | undefined>>
  setDescriptionId: React.Dispatch<React.SetStateAction<string | undefined>>
} & UseFloatingReturn<ReferenceType> &
  ReturnType<typeof useInteractions>

export function usePopover(props: UsePopoverProps = {}): UsePopoverReturn {
  const {
    initialOpen = false,
    open: controlledOpen,
    onOpenChange: setControlledOpen,
    placement,
    modal = true,
  } = props

  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(initialOpen)
  const [labelId, setLabelId] = React.useState<string>()
  const [descriptionId, setDescriptionId] = React.useState<string>()

  const open = controlledOpen ?? uncontrolledOpen
  const setOpen = setControlledOpen ?? setUncontrolledOpen

  const nodeId = useFloatingNodeId()

  const data = useFloating({
    placement,
    open,
    onOpenChange: setOpen,
    whileElementsMounted: autoUpdate,
    middleware: [offset(8), flip(), shift()],
    nodeId,
  })

  const context = data.context

  const click = useClick(context, {
    enabled: controlledOpen == null,
  })
  const dismiss = useDismiss(context, {
    // outsidePressEvent: 'mousedown',
    bubbles: false,
  })
  const role = useRole(context)

  const interactions = useInteractions([click, dismiss, role])

  const popover = React.useMemo(
    () => ({
      open,
      setOpen,
      ...interactions,
      ...data,
      modal,
      labelId,
      descriptionId,
      setLabelId,
      setDescriptionId,
      nodeId,
    }),
    [open, setOpen, modal, interactions, data, labelId, descriptionId, nodeId],
  )

  return popover
}
