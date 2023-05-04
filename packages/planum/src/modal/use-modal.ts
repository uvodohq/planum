import {
  useClick,
  useDismiss,
  useFloating,
  useFloatingNodeId,
  useInteractions,
  useRole,
} from '@floating-ui/react'
import { useUpdateEffect } from '@react-aria/utils'

import type { ModalState } from './use-modal-state'

export interface UseModalProps {
  trigger?: JSX.Element
  closable?: boolean
  onClose?: () => void
  outsidePress?: (event: any) => boolean
}

export function useModal(props: UseModalProps, state: ModalState) {
  const { trigger, closable = true, onClose, outsidePress } = props

  const nodeId = useFloatingNodeId()

  const { reference, floating, context, strategy } = useFloating({
    open: state.isOpen,
    onOpenChange: state.setIsOpen,
    nodeId,
  })

  const { getReferenceProps, getFloatingProps } = useInteractions([
    useClick(context),
    useRole(context),
    useDismiss(context, {
      bubbles: false,
      enabled: closable,
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
    }),
  ])

  const triggerProps = trigger ? trigger.props : {}

  const referenceProps = trigger
    ? getReferenceProps({
        ref: reference,
        ...triggerProps,
        onClick(event) {
          event.stopPropagation()
          event.preventDefault()
          trigger?.props?.onClick?.(event)
        },
      })
    : {}

  const makeFloatingProps = (props?: any) =>
    state.isOpen
      ? getFloatingProps({
          ref: floating,
          'aria-labelledby': state.labelId,
          'aria-describedby': state.descriptionId,
          onClick(event) {
            event.stopPropagation()
          },
          ...props,
        })
      : {}

  useUpdateEffect(() => {
    if (!state.isOpen) onClose?.()
  }, [state.isOpen])

  return {
    referenceProps,
    getFloatingProps: makeFloatingProps,
    reference,
    floating,
    floatingContext: context,
    nodeId,
    strategy,
  }
}
