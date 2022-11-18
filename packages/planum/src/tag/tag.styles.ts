import type * as Stitches from '@stitches/react'

import { subheaderCss } from '../text'
import { styled } from '../theme'

export const IconContainer = styled('span', {
  dflex: 'center',
  transition: 'color 0.15s',
  p: '$8',
  color: '$surface400',

  variants: {
    isHovered: {
      true: {
        color: '$surface700',
      },
    },
    isPressed: {
      true: {
        color: '$surface900',
      },
    },
  },
})

export const TagIconButton = styled('button', {
  appearance: 'none',
  userSelect: 'none',
  outline: 'none',
  display: 'inline-flex',
  alignItems: 'center',
  border: 'none',
  padding: 0,
  background: 'none',
  cursor: 'pointer',

  [`&:focus ${IconContainer}`]: {
    color: '$surface700',
    // outline: '1px solid $surface700',
    borderRadius: '$pill',
    outlineOffset: '-4px',
  },
  [`&:active ${IconContainer}`]: {
    color: '$surface900',
  },
})

export const TagText = styled('span', subheaderCss, {
  fw: '$regular',
  color: '$textDark',
  oneLineClamp: true,
})

export const TagContainer = styled('div', subheaderCss, {
  fw: '$regular',
  display: 'flex',
  alignItems: 'center',
  borderRadius: '$pill',
  transition: 'background-color 0.15s',
  backgroundColor: '$surface100',
  px: '$16',
  overflow: 'hidden',
  maxWidth: '100%',

  '&:hover': {
    backgroundColor: '$surface200',
  },
})

export type StyledTagVariants = Stitches.VariantProps<typeof TagContainer>
