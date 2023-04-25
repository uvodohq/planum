/* eslint-disable unicorn/consistent-destructuring */
import { useControllableValue, useUpdateEffect } from '@uvodohq/planum'
import { AsYouType } from 'libphonenumber-js/min'
import { useCallback, useEffect, useReducer } from 'react'

import type { UsePhoneStateProps } from './phone.types'

interface State {
  isOpen: boolean
  activeIndex: number | null
  selectedIndex: number | null
  search: string
  defaultValue?: string | null
  selectedItem: any | null
  countryCode: any
}

export function usePhoneState(props: UsePhoneStateProps) {
  const {
    items,
    value,
    onChange,
    defaultValue,
    defaultCountryCode = 'US',
  } = props || {}

  const initialState: State = {
    isOpen: false,
    search: '',
    activeIndex: null,
    selectedIndex: null,
    selectedItem: null,
    defaultValue,
    countryCode: defaultCountryCode,
  }

  const [state, updateState] = useReducer(
    (prev: State, next: Partial<State>) => {
      return { ...prev, ...next }
    },
    initialState,
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
  const isDefaultValueNotProvided =
    state.defaultValue === null || state.defaultValue === undefined

  if (isValueNotProvided && selectedItem?.prefix && isDefaultValueNotProvided) {
    updateState({
      defaultValue: selectedItem.prefix,
    })
  }

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

  const onMatchTypeahead = (index: number) => {
    onNavigate(index)

    if (!isOpen) {
      updateState({
        selectedIndex: index,
      })
    }
  }

  const getCountryByValue = useCallback(
    (value: string | null) => {
      let countryCode = state.countryCode

      if (value) {
        const formatter = new AsYouType()
        formatter.input(value)
        const parsedCountryCode = formatter.getCountry()

        if (parsedCountryCode) {
          countryCode = parsedCountryCode
        }
      }

      const foundSelectedIndex = items.findIndex(
        (item) => item.id === countryCode,
      )

      return {
        foundSelectedIndex,
        selectedItem: items[foundSelectedIndex] ?? {},
        countryCode,
      }
    },
    [items, state.countryCode],
  )

  const onChangePhoneInputValue = (newValue?: string) => {
    if (newValue === undefined) return _onChange('')

    const country = getCountryByValue(newValue)

    updateState(country)
    _onChange(newValue)
  }

  // on initial mount find country code
  useEffect(() => {
    const country = getCountryByValue(_value)
    updateState(country)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getCountryByValue])

  // sync state when defaultCountryCode change
  useUpdateEffect(() => {
    updateState({
      countryCode: defaultCountryCode,
    })
  }, [defaultCountryCode])

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
    onChange: onChangePhoneInputValue,
    value: _value,
    updateState,
  }
}
