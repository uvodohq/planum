import { useUpdateEffect } from '@react-aria/utils'
import { useMemo, useState } from 'react'

import countries from './metadata'
import type { Country as CountryType, PhoneNumber } from './utils'
import {
  applyMask,
  getCountryByIso,
  getMaskDigit,
  replaceDialCode,
  splitPhoneNumber,
} from './utils'

export interface UseSelectStateProps {
  items: any[]
  value?: any
}

export type SelectState = ReturnType<typeof useSelectState>

const DEFAULT_PHONE_NUMBER = {
  raw: '',
  formatted: '',
  country: countries[0],
}

export function useSelectState(props: UseSelectStateProps) {
  const { value, defaultCountry, items } = props || {}

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

  const _defaultValue = props.defaultValue || value
  const defaultPhoneNumber =
    (_defaultValue
      ? splitPhoneNumber(_defaultValue)
      : defaultCountry && {
          raw: '',
          formatted: '',
          country: getCountryByIso(defaultCountry),
        }) || DEFAULT_PHONE_NUMBER

  const [_valuePhone, setValuePhone] = useState<PhoneNumber>(defaultPhoneNumber)

  const handleChangePhone = (phoneNumber: PhoneNumber) => {
    setValuePhone(phoneNumber)
  }

  const onCountrySelect = (nextSelectedItem: CountryType) => {
    const nextCountryIso = nextSelectedItem[2] as CountryType[2]

    const nextCountry = getCountryByIso(nextCountryIso)
    const nextCountryPrefix = `+${nextCountry[3]}`

    setValuePhone({
      formatted: '',
      raw: nextCountryPrefix,
      country: nextCountry,
    })
  }

  const onPhoneNumberChange = (e) => {
    const enteredValue = e.target.value
    const countryPrefix = _valuePhone.country[3]
    const countryMask = _valuePhone.country[4]

    const valueWithoutMask = getMaskDigit(enteredValue, countryMask)
    const valueWithMask = applyMask(enteredValue, countryMask)

    const state = {
      ..._valuePhone,
      raw: `+${countryPrefix}${valueWithoutMask}`,
      formatted: valueWithMask,
    }

    console.log({
      state,
    })

    setValuePhone(state)
  }

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
    //
    _valuePhone,
    setValuePhone,
    handleChangePhone,
    onCountrySelect,
    onPhoneNumberChange,
  }
}
