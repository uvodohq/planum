import type { CSS } from '../theme'

export interface TagProps {
  children: React.ReactNode
  /**
   * Left icon to display before the text.
   */
  leftIcon?: React.ReactNode

  /**
   * Right icon to display after the text.
   */
  rightIcon?: React.ReactNode

  /**
   * Whether the tag is removable.
   * @default true
   */
  removable?: boolean

  /**
   * Click handler for the remove button.
   */
  onRemove?: () => void

  /**
   * Align Remove Icon to the left or right.
   * @default 'right'
   */
  removeButtonAlign?: 'left' | 'right'

  css?: CSS
}
