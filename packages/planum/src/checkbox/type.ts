import type {
  AriaCheckboxGroupItemProps,
  AriaCheckboxGroupProps,
  AriaCheckboxProps,
  ToggleProps,
} from '@react-types/checkbox'
import type { ReactNode } from 'react'

import type { CSS } from '../theme'
import type { StyledCheckboxVariants } from './checkbox.styles'

export interface CustomProps {
  css?: CSS
  label?: string
  children?: string
}

export type CheckboxProps = CustomProps &
  StyledCheckboxVariants &
  ToggleProps &
  AriaCheckboxProps

export type CheckboxGroupItemProps = CheckboxProps & AriaCheckboxGroupItemProps

export interface CheckboxBaseProps {
  isDisabled?: boolean
  isIndeterminate?: boolean
  isSelected: boolean
  isFocusVisible?: boolean
  label?: any
  pressProps?: any
  inputProps?: any
  focusProps?: any
  children?: any
  inputRef?: any
}

export type CheckboxGroupProps = AriaCheckboxGroupProps & {
  children: ReactNode
  css?: CSS
}
