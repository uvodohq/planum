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

export interface SelectComponentProps {
  children: React.ReactNode
  items?: any[]

  /**
   * @description
   * select will show which label text need to be rendered in the select box.
   * items[selectedIndex][labelKey]
   */
  labelKey: string
  renderOption?: (props: {}) => React.ReactNode
  matchWidth?: boolean
  popupCss?: CSS
  /**
   *  you can show labels while async select options are loading.
   *  if options not loaded yet, provided value can't be shown.
   *
   */
  fallbackLabel?: string
}

export type SelectProps = InputProps &
  SelectTriggerProps &
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
}
