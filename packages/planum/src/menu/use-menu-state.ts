import useControllableValue from 'ahooks/es/useControllableValue'
import { useState } from 'react'

interface UseMenuStateProps {
  isOpen?: boolean
  defaultIsOpen?: boolean
  onChange?: (isOpen: boolean) => void
}

export type UseMenuState = ReturnType<typeof useMenuState>

export function useMenuState(props: UseMenuStateProps) {
  const { isOpen: value, defaultIsOpen: defaultValue = false, onChange } = props

  const [open, setOpen] = useControllableValue(
    {
      ...(value ? { value } : {}),
      onChange,
    },
    {
      defaultValue,
    },
  )

  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return {
    open,
    setOpen,
    activeIndex,
    setActiveIndex,
  }
}
