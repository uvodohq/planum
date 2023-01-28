import type { AriaLabelingProps, DOMProps } from '@react-types/shared'
import type React from 'react'

import type { CSS } from '../theme'
import type { usePhone } from './use-phone'
import type { usePhoneState } from './use-phone-state'

export type PhoneState = ReturnType<typeof usePhoneState>
export type UsePhoneReturn = ReturnType<typeof usePhone>

export type Value = string | null | undefined

export interface InputProps {
  value?: Value
  defaultValue?: Value
  onChange?: (value: Value) => void
  defaultCountryCode?: string
}

export interface PhoneTriggerProps {
  status?: 'normal' | 'error' | 'success'
  placeholder?: string
  isDisabled?: boolean
  isLoading?: boolean
  fieldProps?: AriaLabelingProps & DOMProps
}

export interface PhoneEmptyContentProps {
  renderEmpty?: (emptyProps?: {}) => JSX.Element
  emptyTitle?: string
}

export interface PhonePopupProps {
  popupCss?: CSS
  renderEmpty?: (emptyProps?: {}) => JSX.Element
}

export interface PhoneOptionProps {
  index?: number
}

export interface PhoneComponentProps {
  /**
   *  you can show labels while async select options are loading.
   *  if options not loaded yet, provided value can't be shown.
   *
   */
  fallbackLabel?: string
}

export interface PhoneFieldProps {
  label?: React.ReactNode
  description?: React.ReactNode
  errorMessage?: React.ReactNode
  successMessage?: React.ReactNode
  preserveLabelSpace?: boolean
}

export type PhoneProps = PhoneFieldProps &
  InputProps &
  PhoneTriggerProps &
  PhoneOptionProps &
  PhoneEmptyContentProps &
  PhonePopupProps &
  PhoneComponentProps

export interface UsePhoneProps {
  state: PhoneState
  labelKey: string
}

export type UsePhoneStateProps = InputProps & {
  items: any[]
}
