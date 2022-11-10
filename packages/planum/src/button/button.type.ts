import type { AriaButtonProps } from '@react-types/button'
import type { PressEvent } from '@react-types/shared'

import type { CSS } from '../theme'
import type { StyledButtonVariants } from './button.styles'

interface CustomProps {
  /**
   * Text to display inside the button
   */
  children?: React.ReactNode

  /**
   * Left icon to display inside the button
   */
  leftIcon?: React.ReactNode

  /**
   * Left icon to display inside the button
   */
  rightIcon?: React.ReactNode

  /**
   * Middle Single Icon for IconButton
   */
  icon?: React.ReactNode
  /**
   * Stiches css styling api
   */
  css?: CSS
  /**
   * @default false
   */
  isLoading?: boolean

  as?: React.ElementType | React.ComponentType

  onClick?: (e: PressEvent) => void
}

// TODO: omit style variants from props
export type ButtonProps<T extends React.ElementType = 'button'> =
  AriaButtonProps<T> &
    StyledButtonVariants &
    CustomProps &
    React.ComponentPropsWithoutRef<T>
