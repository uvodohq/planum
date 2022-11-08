import React, { useContext } from 'react'

import { subheaderCss } from '~/ui/text'

import { styled } from '../theme'
// import { CheckIcon, IconContainer } from './icons'
import type { Value } from './select-component'
import { SelectContext } from './select-context'

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

export const Option: React.FC<OptionProps> = (props) => {
  const { children, index = 0, value } = props

  const context = useContext(SelectContext)
  const { state, select, listRef, onChange, onSelect, dataRef, matchWidth } =
    context

  const { selectedIndex, activeIndex, setActiveIndex, setIsOpen, items } = state

  function handleSelect() {
    setIsOpen(false)
    setActiveIndex(null)
    onChange(value)
    onSelect(value, items[index])
  }

  function handleKeyDown(event: React.KeyboardEvent) {
    if (
      event.key === 'Enter' ||
      (event.key === ' ' && !dataRef.current.typing)
    ) {
      event.preventDefault()
      handleSelect()
    }
  }

  const isSelected = selectedIndex === index
  const isActive = activeIndex === index

  return (
    <StyledOption
      role="option"
      ref={(node) => (listRef.current[index] = node)}
      tabIndex={isActive ? 0 : 1}
      // isActive prevents VoiceOver stuttering.
      aria-selected={isActive && isSelected}
      isSelected={isSelected}
      matchWidth={matchWidth}
      {...select.getItemProps({
        onClick: handleSelect,
        onKeyDown: handleKeyDown,
      })}>
      {children}
    </StyledOption>
  )
}
