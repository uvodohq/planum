import useControllableValue from 'ahooks/es/useControllableValue'
import { useState } from 'react'

export function useMenuState(props) {
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
