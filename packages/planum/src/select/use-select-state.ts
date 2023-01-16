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
  const [search, setSearch] = useState('')
  const [selectedItem, setSelectedItem] = useState(items[defaultSelectedIndex])

  useUpdateEffect(() => {
    setSelectedIndex(defaultSelectedIndex)
    setSelectedIndex(items[defaultSelectedIndex])
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
    searchable: items.length > 10, // show search if more items exist
    items,
    search,
    setSearch,
    selectedItem,
    setSelectedItem,
  }
}
