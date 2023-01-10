import { useUpdateEffect } from '@react-aria/utils'
import { useMemo, useState } from 'react'

export interface UseSelectStateProps {
  items: any[]
  value?: any
}

export type SelectState = ReturnType<typeof useSelectState>

export function useSelectState(props: UseSelectStateProps) {
  const { value, items } = props || {}

  // selected item index, which may or may not be active. shown in the trigger button.
  const defaultSelectedIndex = useMemo(() => {
    const foundSelectedIndex = items.findIndex((item) => item.id === value)
    return foundSelectedIndex > -1 ? foundSelectedIndex : null
  }, [value, items])

  const [isOpen, setIsOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState<number | null>(null) // currently focused item
  const [selectedIndex, setSelectedIndex] = useState(defaultSelectedIndex)

  useUpdateEffect(() => {
    setSelectedIndex(defaultSelectedIndex)
  }, [defaultSelectedIndex])

  return {
    isOpen,
    setIsOpen,
    openSelect: () => setIsOpen(true),
    closeSelect: () => setIsOpen(false),
    activeIndex,
    setActiveIndex,
    selectedIndex,
    setSelectedIndex,
    isEmpty: items.length === 0,
    items,
  }
}
