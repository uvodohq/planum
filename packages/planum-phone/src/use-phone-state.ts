import { useControllableValue, useUpdateEffect } from '@uvodohq/planum'
import { AsYouType } from 'libphonenumber-js/min'
import { useEffect, useReducer } from 'react'

import type { UsePhoneStateProps } from './phone.types'

interface State {
  isOpen: boolean
  activeIndex: number | null
  selectedIndex: number | null
  search: string
  defaultValue?: string | null
  selectedItem: any | null
}

export function usePhoneState(props: UsePhoneStateProps) {
  const { items, value, onChange, defaultValue, defaultCountryCode } =
    props || {}

  const [state, updateState] = useReducer(
    (prev: State, next: Partial<State>) => {
      return { ...prev, ...next }
    },
    {
      isOpen: false,
      search: '',
      activeIndex: null,
      selectedIndex: null,
      selectedItem: null,
      defaultValue,
    },
  )
  const [_value, _onChange] = useControllableValue(
    {
      value,
      onChange,
    },
    {
      defaultValue: state.defaultValue,
    },
  )

  const { isOpen, selectedItem } = state

  const isValueNotProvided = _value === null || _value === undefined

  if (isValueNotProvided && selectedItem?.prefix && !state.defaultValue) {
    updateState({
      defaultValue: selectedItem.prefix,
    })
  }

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

  useEffect(() => {
    let countryCode = defaultCountryCode

    if (_value) {
      const formatter = new AsYouType()
      formatter.input(_value)
      const parsedCountry = formatter.getCountry()

      if (parsedCountry) {
        countryCode = parsedCountry
      }
    }

    const foundSelectedIndex = items.findIndex(
      (item) => item.id === countryCode,
    )

    updateState({
      selectedIndex: foundSelectedIndex,
      selectedItem: items[foundSelectedIndex] ?? {},
    })
  }, [_value, defaultCountryCode, items])

  useUpdateEffect(() => {
    if (!isOpen) {
      updateState({
        activeIndex: null,
        search: '',
      })
    }
  }, [isOpen])

  function onChangeValue(newValue?: string) {
    if (newValue === undefined) {
      _onChange('')
      return
    }

    _onChange(newValue)
  }

  return {
    ...state,
    toggleOpen,
    onMatchTypeahead,
    onNavigate,
    openSelect: () => !isOpen && toggleOpen(true),
    closeSelect: () => isOpen && toggleOpen(false),
    searchable: true,
    items,
    onChange: onChangeValue,
    value: isValueNotProvided ? state.defaultValue : _value,
    updateState,
    defaultCountryCode,
  }
}
