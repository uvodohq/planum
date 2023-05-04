import { useUpdateEffect } from '@react-aria/utils'
import { useEffect, useMemo, useReducer } from 'react'

import { useControllableValue } from '../hooks'
import type {
  GroupItem,
  Option,
  UseSelectStateProps,
  Value,
} from './select.types'

interface State {
  isOpen: boolean
  activeIndex: number | null
  search: string
  selectedItemsMap: Map<string, Option[]>
  groups: GroupItem[]
  openedGroupIds: string[]
}

function getFilteredGroups(groups: GroupItem[], search: string) {
  const copy = groups.map((group) => {
    return {
      ...group,
      children: group.children.map((option) => ({ ...option })),
    }
  })

  return copy.filter((group) => {
    const filtered = group.children.filter((item) =>
      item.name.toLowerCase().includes(search?.toLowerCase()),
    )

    if (filtered.length > 0) {
      group.children = filtered

      return true
    } else {
      return false
    }
  })
}

export function useSelectState(props: UseSelectStateProps) {
  const { items, onSelect, ...rest } = props || {}
  const [value, onChange] = useControllableValue<Value>(rest)

  // selected item index, which may or may not be active. shown in the trigger button.
  const defaultSelectedItemsMap = useMemo(() => {
    const map = new Map()
    for (const group of items) {
      const selectedItemsOfGroup = group.children.filter((item) =>
        value?.includes(item.id),
      )

      map.set(group.id, selectedItemsOfGroup)
    }
    return map
  }, [value, items])

  const itemsMap = useMemo(() => {
    const map = new Map()
    for (const group of items) {
      map.set(group.id, group)
    }
    return map
  }, [items])

  const initialState: State = {
    isOpen: false,
    search: '',
    activeIndex: null,
    selectedItemsMap: defaultSelectedItemsMap,
    openedGroupIds: [],
    groups: getFilteredGroups(items, ''),
  }

  const [state, updateState] = useReducer(
    (prev: State, next: Partial<State>) => {
      return { ...prev, ...next }
    },
    initialState,
  )

  const { isOpen, groups } = state

  const toggleOpen = (isOpen: boolean) => {
    updateState({
      isOpen,
    })
  }

  const onNavigate = (index: number | null) => {
    if (isOpen) {
      updateState({
        activeIndex: index,
      })
    }
  }

  const onAccordionChange = (values: string[]) => {
    updateState({
      openedGroupIds: values,
    })
  }

  const handleInputChange = (search: string) => {
    const groups = getFilteredGroups(items, search)

    updateState({
      activeIndex: null,
      search,
      groups,
      openedGroupIds:
        search === '' ? [] : groups.map((group) => group.id.toString()),
    })
  }

  useEffect(() => {
    if (!isOpen) {
      const groups = getFilteredGroups(items, '')
      updateState({
        activeIndex: null,
        search: '',
        groups,
        openedGroupIds: [],
      })
    }
  }, [isOpen, items])

  useUpdateEffect(() => {
    updateState({
      selectedItemsMap: defaultSelectedItemsMap,
    })
  }, [defaultSelectedItemsMap])

  return {
    ...state,
    isEmpty: groups.length === 0,
    toggleOpen,
    onNavigate,
    openSelect: () => toggleOpen(true),
    closeSelect: () => toggleOpen(false),
    items,
    onChange,
    onSelect,
    value,
    updateState,
    onAccordionChange,
    handleInputChange,
    itemsMap,
  }
}
