import { useId } from '@floating-ui/react'
import React from 'react'

import { subheaderCss } from '../text'
import { styled } from '../theme'
import type { Value } from './select.types'
import { useSelectContext } from './select-context'

const StyledOption = styled('li', subheaderCss, {
  fw: '$regular',
  padding: 8,
  userSelect: 'none',
  transition: 'background-color 0.15s',
  outline: 'none',
  borderRadius: '$sm',
  color: '$textDark',
  fontWeight: '$regular',
  cursor: 'pointer',
  oneLineClamp: true,
  whiteSpace: 'nowrap',

  // from floating
  '&:focus': {
    backgroundColor: '$surface200',
    position: 'relative',
    zIndex: 1,
  },
  '&': { display: 'flex', alignItems: 'center', gap: '10px' },
  '&::marker': { display: 'none' },

  //
  '&:hover': {
    backgroundColor: '$surface100',
  },

  variants: {
    isSelected: {
      true: {
        color: '$textBrand',
        backgroundColor: '$primary50',

        '&:hover': {
          backgroundColor: '$primary100',
        },

        '&:focus': {
          backgroundColor: '$primary100',
        },
      },
    },
    isFocused: {
      true: {
        backgroundColor: '$surface200',
        '&:hover': {},
      },
    },
    isDisabled: {
      true: {
        '&:hover': {},
      },
    },
    matchWidth: {
      false: {
        oneLineClamp: true,
        whiteSpace: 'nowrap',
        minWidth: 200,
      },
      true: {
        wordBreak: 'break-all',
      },
    },
  },
  compoundVariants: [
    {
      isSelected: true,
      isFocused: true,
      css: {
        backgroundColor: '$primary100',
      },
    },
  ],
  defaultVariants: {
    matchWidth: true,
  },
})

export interface OptionProps {
  value: Value
  label: string
  children: React.ReactNode
  index?: number
}

export const Option = (props: OptionProps) => {
  const { children, index = 0 } = props
  const { select, state } = useSelectContext()
  const { handleSelect, handleKeyDown, matchWidth, listItemsRef } = select
  const { selectedIndex, activeIndex, searchable } = state

  const id = useId()

  const isSelected = selectedIndex === index
  const isActive = activeIndex === index

  return (
    <StyledOption
      id={id}
      role="option"
      ref={(node) => {
        listItemsRef.current[index] = node
      }}
      tabIndex={isActive ? 0 : -1}
      aria-selected={isActive && isSelected}
      isSelected={isSelected}
      isFocused={isActive}
      matchWidth={matchWidth}
      {...select.getItemProps({
        onClick: () => handleSelect(index), // Handle pointer select.
        onKeyDown: searchable ? undefined : handleKeyDown, // Handle keyboard select.
      })}>
      {children}
    </StyledOption>
  )
}
