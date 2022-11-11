import type { AriaCheckboxProps, ToggleProps } from '@react-types/checkbox'

import type { CSS } from '../theme'
import type { StyledCheckboxVariants } from './checkbox.styles'

interface Props {
  css?: CSS
  label?: string
  children?: string
}

export type CheckboxProps = Props &
  StyledCheckboxVariants &
  ToggleProps &
  AriaCheckboxProps
