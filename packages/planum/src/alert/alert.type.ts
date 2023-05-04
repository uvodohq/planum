import type { CSS } from '../theme'
import type { StyledAlertVariants } from './alert.styles'

export interface AlertProps extends StyledAlertVariants {
  title?: string
  message?: React.ReactNode

  /**
   * variant of the alert
   * @default 'info'
   */
  variant?: 'success' | 'info' | 'warning' | 'primary' | 'error'
  onClose?: () => void
  closable?: boolean
  actions?: React.ReactNode
  isOpen?: boolean
  onClick?: (e: React.MouseEvent<HTMLElement>) => void
  css?: CSS
  children?: never
}
