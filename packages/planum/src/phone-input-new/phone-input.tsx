import type { HTMLAttributes } from 'react'
import RFNInput from 'react-phone-number-input/input'

import { subheaderCss } from '../text'
import { css } from '../theme'
import type { PhoneTriggerProps } from './phone.types'
import { usePhoneContext } from './phone-context'

const inputCss = css(subheaderCss, {
  width: '100%',
  flex: 1,
  height: '100%',
  padding: '$8 $16',
  outline: 'none',
  display: 'block',
  maxWidth: '100%',
  transition: 'border-color 0.2s, box-shadow 0.2s',
  backgroundColor: 'transparent',
  color: '$textDark',
  fontWeight: '$regular',

  '&:-webkit-autofill': {
    '&, &:hover, &:focus': {
      boxShadow: '0 0 0px 1000px white inset !important',
      transition: 'background-color 0s',
    },
  },

  '&::placeholder': {
    font: 'inherit',
    color: '$surface500',
    disableActions: true,
  },
})

type Props = PhoneTriggerProps & HTMLAttributes<HTMLButtonElement>

export function PhoneInput(props: Props) {
  const { placeholder, fieldProps } = props
  const { phone, state } = usePhoneContext()
  const { phoneInputRef } = phone
  const { value, closeSelect, onChange, defaultCountryCode } = state

  return (
    <RFNInput
      tabIndex={0}
      international
      // limitMaxLength
      // countryCallingCodeEditable={false}
      // initialValueFormat="national"
      // withCountryCallingCode
      // defaultCountry={defaultCountryCode as any}
      ref={phoneInputRef}
      placeholder={placeholder}
      type="tel"
      value={value}
      onChange={onChange}
      className={inputCss()}
      onFocus={() => {
        closeSelect()
      }}
      {...fieldProps}
    />
  )
}
