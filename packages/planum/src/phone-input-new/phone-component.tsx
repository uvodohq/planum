import {
  getCountries,
  getCountryCallingCode,
} from 'react-phone-number-input/input'
import countryNamesEn from 'react-phone-number-input/locale/en.json'

import type { PhoneProps } from './phone.types'
import { PhoneContext } from './phone-context'
import { PhoneInput } from './phone-input'
import { PhonePopup } from './phone-popup/phone-popup'
import { PhoneTriggerContainer } from './phone-trigger-container'
import { usePhone } from './use-phone'
import { usePhoneState } from './use-phone-state'

const countries = getCountries()
  .map((countryCode) => ({
    id: countryCode,
    countryName: countryNamesEn[countryCode],
    prefix: `+${getCountryCallingCode(countryCode)}`,
  }))
  .sort((a, b) => a.countryName.localeCompare(b.countryName))

export const PhoneComponent = (props: PhoneProps) => {
  const {
    value,
    defaultValue,
    onChange,
    defaultCountryCode = 'US',
    renderEmpty,
    status,
    placeholder,
    isDisabled,
    isLoading,
    fieldProps,
    popupCss,
  } = props

  const state = usePhoneState({
    value,
    defaultValue,
    onChange,
    items: countries,
    defaultCountryCode,
  })

  const phone = usePhone({
    labelKey: 'countryName',
    state,
  })

  console.log({
    value: state.value,
  })

  return (
    <PhoneContext.Provider
      value={{
        phone,
        state,
      }}>
      <PhoneTriggerContainer
        status={status}
        isDisabled={isDisabled}
        isLoading={isLoading}>
        <PhoneInput placeholder={placeholder} fieldProps={fieldProps} />
      </PhoneTriggerContainer>
      <PhonePopup popupCss={popupCss} renderEmpty={renderEmpty} />
    </PhoneContext.Provider>
  )
}
