import * as React from 'react'

import type { CSS } from '../theme'
import type { StyledBadgeVariants } from './badge.styles'
import { StyledBadge } from './badge.styles'

export interface BadgeProps extends StyledBadgeVariants {
  children: React.ReactNode
  css?: CSS
}

export default function Badge(props: BadgeProps) {
  return <StyledBadge {...props} />
}
