import { useUpdateEffect } from '@react-aria/utils'
import { useCallback, useEffect, useMemo, useReducer } from 'react'

import { useControllableValue } from '../hooks'
import type { UseSelectStateProps } from './select.types'

interface State {
  isOpen: boolean
  activeIndex: number | null
  selectedIndex: number | null
  search: string
  selectedItem: any | null
}

export function useSelectState(props: UseSelectStateProps) {
  const { items, onSelect, searchable, ...rest } = props || {}
  const [value, onChange] = useControllableValue(rest)

  // selected item index, which may or may not be active. shown in the trigger button.
  const defaultSelectedIndex = useMemo(() => {
    const foundSelectedIndex = items.findIndex((item) => item.id === value)
    return foundSelectedIndex > -1 ? foundSelectedIndex : null
  }, [value, items])

  const initialState: State = {
    isOpen: false,
    search: '',
    activeIndex: null,
    selectedIndex: defaultSelectedIndex,
    selectedItem: defaultSelectedIndex ? items[defaultSelectedIndex] : null,
  }

  const [state, updateState] = useReducer(
    (prev: State, next: Partial<State>) => {
      return { ...prev, ...next }
    },
    initialState,
  )

  const { isOpen } = state

  const toggleOpen = useCallback((isOpen: boolean) => {
    updateState({
      isOpen,
    })
  }, [])

  const onMatchTypeahead = useCallback(
    (index: number) => {
      if (isOpen) {
        updateState({
          activeIndex: index,
        })
      } else {
        updateState({
          selectedIndex: index,
        })
      }
    },
    [isOpen],
  )

  const onNavigate = useCallback(
    (index: number | null) => {
      if (isOpen) {
        updateState({
          activeIndex: index,
        })
      }
    },
    [isOpen],
  )

  useUpdateEffect(() => {
    updateState({
      selectedIndex: defaultSelectedIndex,
      selectedItem: defaultSelectedIndex ? items[defaultSelectedIndex] : null,
    })
  }, [defaultSelectedIndex])

  useEffect(() => {
    if (!isOpen) {
      updateState({
        activeIndex: null,
        search: '',
      })
    }
  }, [isOpen])

  return {
    ...state,
    toggleOpen,
    onMatchTypeahead,
    onNavigate,
    openSelect: () => toggleOpen(true),
    closeSelect: () => toggleOpen(false),
    searchable: searchable ?? items.length > 10, // show search if more items exist
    items,
    onChange,
    onSelect,
    value,
    updateState,
  }
}
