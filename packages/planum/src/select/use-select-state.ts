import { useUpdateEffect } from '@react-aria/utils'
import { useMemo, useState } from 'react'

import { usePrevious } from '../hooks'

export interface UseSelectStateProps {
  items: any[]
  value?: any
}

export type SelectState = ReturnType<typeof useSelectState>

export default function useSelectState(props: UseSelectStateProps) {
  const { value, items } = props || {}

  // selected item index, which may or may not be active. shown in the trigger button.
  const defaultSelectedIndex = useMemo(() => {
    return items.findIndex((item) => item.id === value)
  }, [value, items])

  const [selectedIndex, setSelectedIndex] = useState(defaultSelectedIndex)

  const [isOpen, setIsOpen] = useState(false)

  // activeIndex item that's currently highlighted (focused) but not selected.
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const prevActiveIndex = usePrevious<number | null>(activeIndex)

  useUpdateEffect(() => {
    const defaultSelectedIndex = items.findIndex((item) => item.id === value)
    setSelectedIndex(defaultSelectedIndex)
  }, [value, items])

  return {
    //
    isOpen,
    setIsOpen,
    openSelect: () => setIsOpen(true),
    closeSelect: () => setIsOpen(false),
    //
    activeIndex,
    setActiveIndex,
    selectedIndex,
    setSelectedIndex,
    prevActiveIndex,
    isEmpty: items.length === 0,
    items,
  }
}
