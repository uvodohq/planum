import type * as Stitches from '@stitches/react'

import { paragraphCss } from '../text'
import { styled } from '../theme'

export const StyledBadge = styled('span', paragraphCss, {
  px: '$8',
  borderRadius: '$pill',
  border: '1px solid transparent',
  color: '$textDark',
  display: 'inline-flex',
  alignItems: 'center',
  height: '$24',
  whiteSpace: 'nowrap',

  variants: {
    variant: {
      // filled variants
      warning: {
        bg: '$warning200',
      },
      neutral: {
        bg: '$surface200',
      },
      success: {
        bg: '$success200',
      },
      danger: {
        bg: '$danger200',
      },
      secondary: {
        bg: '$secondary',
      },
      primary: {
        bg: '$primary500',
        color: '$white',
      },

      // outline variants
      outlineWarning: {
        color: '$warning600',
        borderColor: '$warning600',
      },
      outlineNeutral: {
        color: '$neutral600',
        borderColor: '$neutral600',
      },
      outlineSuccess: {
        color: '$success600',
        borderColor: '$success600',
      },
      outlineDanger: {
        color: '$danger600',
        borderColor: '$danger600',
      },
      outlineSecondary: {
        color: '$secondary',
        borderColor: '$secondary',
      },
      outlinePrimary: {
        color: '$primary600',
        borderColor: '$primary600',
      },
    },
    bordered: {
      true: {},
    },
    uppercase: {
      true: {
        textTransform: 'uppercase',
      },
    },

    roundness: {
      sm: {
        borderRadius: '$sm',
      },
      pill: {
        borderRadius: '$pill',
      },
    },
  },
  defaultVariants: {
    variant: 'neutral',
    roundness: 'pill',
  },
  compoundVariants: [
    {
      bordered: true,
      variant: 'outlinePrimary',
      css: {
        borderColor: '$primary600',
      },
    },
    {
      bordered: true,
      variant: 'warning',
      css: {
        borderColor: '$warning300',
      },
    },
    {
      bordered: true,
      variant: 'neutral',
      css: {
        borderColor: '$surface300',
      },
    },
    {
      bordered: true,
      variant: 'warning',
      css: {
        borderColor: '$warning300',
      },
    },
    {
      bordered: true,
      variant: 'success',
      css: {
        borderColor: '$success300',
      },
    },
    {
      bordered: true,
      variant: 'danger',
      css: {
        borderColor: '$danger300',
      },
    },
    {
      bordered: true,
      variant: 'secondary',
      css: {
        borderColor: '$secondary100',
      },
    },
    {
      bordered: true,
      variant: 'primary',
      css: {
        borderColor: '$primary600',
      },
    },
    {
      bordered: true,
      variant: 'success',
      css: {
        borderColor: '$success300',
      },
    },
    {
      bordered: true,
      variant: 'danger',
      css: {
        borderColor: '$danger300',
      },
    },
    {
      bordered: true,
      variant: 'secondary',
      css: {
        borderColor: '$secondary300',
      },
    },
  ],
})

export type StyledBadgeVariants = Stitches.VariantProps<typeof StyledBadge>
export type BadgeVariantTypes = StyledBadgeVariants['variant']
