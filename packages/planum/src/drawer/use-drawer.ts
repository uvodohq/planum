import {
  useClick,
  useDismiss,
  useFloating,
  useId,
  useInteractions,
  useRole,
} from '@floating-ui/react'
import type React from 'react'

import { useControllableValue } from '../hooks'

export interface DrawerProps {
  trigger: JSX.Element
  children: (props: {
    close: () => void
    labelId: string
    descriptionId: string
  }) => React.ReactNode

  isOpen?: boolean
  defaultIsOpen?: boolean
  onOpenChange?: (isOpen: boolean) => void
  outsidePress?: (event: any) => boolean
}

export default function useDrawer(props: DrawerProps) {
  const {
    isOpen: value,
    defaultIsOpen: defaultValue = false,
    onOpenChange,
    outsidePress,
  } = props

  const [open, setOpen] = useControllableValue(
    {
      ...(value ? { value } : {}),
      onChange: onOpenChange,
    },
    {
      defaultValue,
    },
  )

  const { reference, floating, context } = useFloating({
    open,
    onOpenChange: setOpen,
  })

  const id = useId()
  const labelId = `${id}-label`
  const descriptionId = `${id}-description`

  const { getReferenceProps, getFloatingProps } = useInteractions([
    useClick(context),
    useRole(context),
    useDismiss(context, {
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

  return {
    getReferenceProps,
    getFloatingProps,
    reference,
    floating,
    labelId,
    descriptionId,
    context,
    isOpen: open,
    close: () => setOpen(false),
  }
}
