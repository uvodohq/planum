import { useId } from '@floating-ui/react'
import React, { useContext } from 'react'

import { Flag } from '../flag'
import { Box } from '../layout'
import { subheaderCss } from '../text'
import { styled } from '../theme'
// import { CheckIcon, IconContainer } from './icons'
import type { Value } from './phone-component'
import { SelectContext } from './phone-context'

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
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  gap: 4,

  // from floating
  '&:focus': {
    backgroundColor: '$surface200',
    position: 'relative',
    zIndex: 1,
  },

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

export const Option: React.FC<OptionProps> = (props) => {
  const { item: country, index = 0 } = props

  const { select, listRef, matchWidth } = useContext(SelectContext)

  const {
    selectedIndex,
    activeIndex,
    searchable,
    handleSelect,
    handleKeyDown,
  } = select

  const id = useId()

  const isSelected = selectedIndex === index
  const isActive = activeIndex === index

  const countryCode = country[2]
  const countryName = country[0]
  const countryPrefix = country[3]

  return (
    <StyledOption
      id={id}
      role="option"
      ref={(node) => {
        listRef.current[index] = node
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
      <Flag country={countryCode} css={{ width: 24, minWidth: 24 }} />
      <Box css={{ oneLineClamp: true }}>{countryName}</Box>
      <Box as="span" css={{ color: '$textDisabled' }}>
        (+{countryPrefix})
      </Box>
    </StyledOption>
  )
}
