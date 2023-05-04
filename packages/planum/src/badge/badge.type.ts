import type * as React from 'react'

import type { CSS } from '../theme'
import type { StyledBadgeVariants } from './badge.styles'

export interface BadgeProps extends StyledBadgeVariants {
  children: React.ReactNode
  css?: CSS
}

export type BadgeVariant = StyledBadgeVariants['variant']
