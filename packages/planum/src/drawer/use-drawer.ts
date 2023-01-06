import {
  useClick,
  useDismiss,
  useFloating,
  useId,
  useInteractions,
  useRole,
} from '@floating-ui/react'
import useControllableValue from 'ahooks/es/useControllableValue'
import type React from 'react'

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
}

export default function useDrawer(props: DrawerProps) {
  const {
    isOpen: value,
    defaultIsOpen: defaultValue = false,
    onOpenChange,
    //
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
    useDismiss(context),
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
