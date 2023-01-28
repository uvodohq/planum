import { useControllableValue, useUpdateEffect } from '@uvodohq/planum'
import { useMemo, useReducer } from 'react'
import { parsePhoneNumber } from 'react-phone-number-input'

import type { UsePhoneStateProps } from './phone.types'

interface State {
  isOpen: boolean
  activeIndex: number | null
  selectedIndex: number | null
  search: string
  selectedItem: any | null
}

export function usePhoneState(props: UsePhoneStateProps) {
  const { items, value, onChange, defaultValue, defaultCountryCode } =
    props || {}

  const defaultProps = useMemo(() => {
    const countryCode = defaultCountryCode
    const providedValue = value ?? defaultValue

    // get country code from parsed provied value
    // if (providedValue) {
    //   const parsed = parsePhoneNumber(providedValue)

    //   console.log({ parsed })
    //   if (parsed?.country) {
    //     countryCode = parsed?.country
    //   }
    // }

    const foundSelectedIndex = items.findIndex(
      (item) => item.id === countryCode,
    )
    return {
      selectedIndex: foundSelectedIndex,
      selectedItem: items[foundSelectedIndex] ?? {},
    }
  }, [defaultCountryCode, value, defaultValue, items])

  const [_value, _onChange] = useControllableValue(
    {
      value,
      onChange,
    },
    {
      defaultValue: props.defaultValue ?? defaultProps.selectedItem.prefix,
    },
  )

  const initialState: State = {
    isOpen: false,
    search: '',
    activeIndex: null,
    selectedIndex: defaultProps.selectedIndex,
    selectedItem: defaultProps.selectedItem,
  }

  const [state, updateState] = useReducer(
    (prev: State, next: Partial<State>) => {
      return { ...prev, ...next }
    },
    initialState,
  )

  const { isOpen } = state

  const toggleOpen = (isOpen: boolean) => {
    updateState({
      isOpen,
    })
  }

  const onMatchTypeahead = (index: number) => {
    if (isOpen) {
      updateState({
        activeIndex: index,
      })
    } else {
      updateState({
        selectedIndex: index,
      })
    }
  }

  const onNavigate = (index: number | null) => {
    if (isOpen) {
      updateState({
        activeIndex: index,
      })
    }
  }

  useUpdateEffect(() => {
    updateState(defaultProps)
  }, [defaultProps])

  useUpdateEffect(() => {
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
    openSelect: () => !isOpen && toggleOpen(true),
    closeSelect: () => isOpen && toggleOpen(false),
    searchable: true,
    items,
    onChange: _onChange,
    value: _value,
    updateState,
    defaultCountryCode,
  }
}
