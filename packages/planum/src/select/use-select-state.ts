import { useUpdateEffect } from '@react-aria/utils'
import { useEffect, useMemo, useState } from 'react'

import { useControllableValue } from '../hooks'
import type { UseSelectStateProps } from './select.types'

export function useSelectState(props: UseSelectStateProps) {
  const { items, onSelect, ...rest } = props || {}
  const [value, onChange] = useControllableValue(rest)

  // selected item index, which may or may not be active. shown in the trigger button.
  const defaultSelectedIndex = useMemo(() => {
    const foundSelectedIndex = items.findIndex((item) => item.id === value)
    return foundSelectedIndex > -1 ? foundSelectedIndex : null
  }, [value, items])

  const [isOpen, setIsOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState<number | null>(null) // currently focused item
  const [selectedIndex, setSelectedIndex] = useState(defaultSelectedIndex)
  const [search, setSearch] = useState('')
  const [selectedItem, setSelectedItem] = useState(() =>
    defaultSelectedIndex ? items[defaultSelectedIndex] : null,
  )

  useUpdateEffect(() => {
    setSelectedIndex(defaultSelectedIndex)
    setSelectedItem(defaultSelectedIndex ? items[defaultSelectedIndex] : null)
  }, [defaultSelectedIndex])

  useEffect(() => {
    if (!isOpen) {
      setSearch('')
      setActiveIndex(null)
    }
  }, [isOpen, setActiveIndex])

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
    onChange,
    onSelect,
    value,
  }
}
