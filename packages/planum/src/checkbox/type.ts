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
  label?: ReactNode
  children?: ReactNode
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
  label?: ReactNode
  pressProps?: any
  inputProps?: any
  focusProps?: any
  children?: ReactNode
  inputRef?: any
}

export type CheckboxGroupProps = AriaCheckboxGroupProps & {
  children: ReactNode
  css?: CSS
}
