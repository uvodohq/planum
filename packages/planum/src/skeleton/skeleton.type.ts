import type { HTMLAttributes } from 'react'

import type { CSS } from '../theme'

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * should show square image loader
   *
   * @default false
   */
  image?: boolean

  /**
   * Only show one line paragraph, not two
   */
  oneTextLine?: boolean

  /**
   * Disable animation - it will be false in reduced motion mode
   * @default true
   */
  animated?: boolean

  /**
   * Used to hide or show text parts of the skeleton
   */
  showText?: boolean
  /**
   * Used to change the background color of the skeleton
   */
  color?: string
  css?: CSS
}
