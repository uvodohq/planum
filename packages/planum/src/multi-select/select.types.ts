import type { Placement } from '@floating-ui/react'
import type { AriaLabelingProps, DOMProps } from '@react-types/shared'
import type React from 'react'

import type { CSS } from '../theme'
import type { useSelect } from './use-select'
import type { useSelectState } from './use-select-state'

export type SelectState = ReturnType<typeof useSelectState>
export type UseSelectReturn = ReturnType<typeof useSelect>

export type Value = (string | number)[] | null | undefined

export interface InputProps {
  value?: Value
  defaultValue?: Value
  onChange?: (value: Value) => void
  onSelect?: (value: Value, item: any) => void
}

export interface SelectTriggerProps {
  status?: 'normal' | 'error' | 'success'
  placeholder?: string
  isDisabled?: boolean
  isLoading?: boolean
  fallbackLabel?: string
  fieldProps?: AriaLabelingProps & DOMProps
  renderTrigger?: (
    props: SelectTriggerProps & { label?: string },
  ) => JSX.Element
}

export interface SelectEmptyContentProps {
  renderEmpty?: (emptyProps?: {}) => JSX.Element
  emptyTitle?: string
}

export interface SelectPopupProps {
  popupCss?: CSS
}

export interface SelectOptionProps {
  index?: number
  matchWidth?: boolean
}

export interface Option {
  id: string | number
  name: string
}

export interface GroupItem {
  name: string
  id: string | number
  children: Option[]
}

export interface SelectComponentProps {
  items?: GroupItem[]
  popupCss?: CSS
}

export interface SelectFieldProps {
  label?: React.ReactNode
  description?: React.ReactNode
  errorMessage?: React.ReactNode
  successMessage?: React.ReactNode
  preserveLabelSpace?: boolean
}

export type SelectProps = SelectFieldProps &
  InputProps &
  SelectTriggerProps &
  SelectOptionProps &
  SelectEmptyContentProps &
  SelectPopupProps &
  SelectComponentProps

export interface UseSelectProps {
  matchWidth?: boolean
  position?: Placement
  state: SelectState
}

export type UseSelectStateProps = InputProps & {
  items: GroupItem[]
}
