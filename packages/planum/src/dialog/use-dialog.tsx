import type { ReferenceType, UseFloatingReturn } from '@floating-ui/react'
import {
  useClick,
  useDismiss,
  useFloating,
  useFloatingNodeId,
  useInteractions,
  useRole,
} from '@floating-ui/react'
import * as React from 'react'

export interface UseDialogProps {
  initialOpen?: boolean
  open?: boolean
  onOpenChange?: (open: boolean) => void
  outsidePress?: (event: any) => boolean
}

export type UseDialogReturn = {
  open: boolean
  setOpen(open: boolean): void
  labelId?: string
  nodeId: string
  descriptionId?: string
  setLabelId: React.Dispatch<React.SetStateAction<string | undefined>>
  setDescriptionId: React.Dispatch<React.SetStateAction<string | undefined>>
} & UseFloatingReturn<ReferenceType> &
  ReturnType<typeof useInteractions>

export function useDialog(props: UseDialogProps = {}): UseDialogReturn {
  const {
    initialOpen = false,
    open: controlledOpen,
    onOpenChange: setControlledOpen,
    outsidePress,
  } = props

  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(initialOpen)
  const [labelId, setLabelId] = React.useState<string | undefined>()
  const [descriptionId, setDescriptionId] = React.useState<string | undefined>()

  const open = controlledOpen ?? uncontrolledOpen
  const setOpen = setControlledOpen ?? setUncontrolledOpen

  const nodeId = useFloatingNodeId()

  const data = useFloating({
    open,
    onOpenChange: setOpen,
    nodeId,
  })

  const context = data.context

  const click = useClick(context, {
    enabled: controlledOpen == null,
  })
  const dismiss = useDismiss(context, {
    outsidePressEvent: 'mousedown',
    outsidePress(event) {
      // ignore closing dialog when clicking on toast
      const toastContainer = document.querySelector('.planum-toast')
      if (toastContainer?.contains(event.target as Node)) {
        return false
      }

      if (outsidePress) {
        return outsidePress(event)
      }

      return true
    },
    bubbles: false,
  })
  const role = useRole(context, {
    role: 'dialog',
  })

  const interactions = useInteractions([click, dismiss, role])

  const dialog = React.useMemo(
    () => ({
      open,
      setOpen,
      ...interactions,
      ...data,
      labelId,
      descriptionId,
      setLabelId,
      setDescriptionId,
      nodeId,
    }),
    [open, setOpen, interactions, data, labelId, descriptionId, nodeId],
  )

  return dialog
}
