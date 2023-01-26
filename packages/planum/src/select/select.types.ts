import type { Placement } from '@floating-ui/react'
import type { AriaLabelingProps, DOMProps } from '@react-types/shared'
import type React from 'react'

import type { CSS } from '../theme'
import type { useSelect } from './use-select'
import type { useSelectState } from './use-select-state'

export type SelectState = ReturnType<typeof useSelectState>
export type UseSelectReturn = ReturnType<typeof useSelect>

export type Value = string | number | null | undefined

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
  renderOption?: (optionProps: {
    id: string
    role: string
    tabIndex: number
    'aria-selected': boolean
    'data-selected': boolean
    matchWidth: boolean | undefined
    ref: (node: HTMLLIElement | null) => void
    item?: any
    state: SelectState
    select: UseSelectReturn
    OptionComponent: React.FC<any>
    index: number
  }) => JSX.Element
  index?: number
  matchWidth?: boolean
}

export interface SelectComponentProps {
  items?: any[]

  /**
   * @description
   * select will show which label text need to be rendered in the select box.
   * items[selectedIndex][labelKey]
   */
  labelKey: string
  searchable?: boolean
  popupCss?: CSS
  /**
   *  you can show labels while async select options are loading.
   *  if options not loaded yet, provided value can't be shown.
   *
   */
  fallbackLabel?: string
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
  labelKey: string
}

export type UseSelectStateProps = InputProps & {
  items: any[]
  searchable?: boolean
}
