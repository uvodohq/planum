import { useId } from '@floating-ui/react'
import React, { useContext } from 'react'

import { subheaderCss } from '../text'
import { styled } from '../theme'
import { AutoCompleteContext } from './context'
// import { CheckIcon, IconContainer } from './icons'

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
  // oneLineClamp: true,
  wordBreak: 'break-all',

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
})

export interface OptionProps {
  children: React.ReactNode
  index?: number
}

export const Option = (props: OptionProps) => {
  const { children, index = 0 } = props
  const { state, autoComplete, listRef, items, onSelect } =
    useContext(AutoCompleteContext)

  const id = useId()

  function onClick(e: React.MouseEvent<HTMLLIElement>) {
    e.stopPropagation()
    e.preventDefault()

    const selected = items[index]
    state.setInputValue('')
    state.close()

    if (onSelect) {
      onSelect(selected)
    }
  }

  const isActive = state.activeIndex === index

  return (
    <StyledOption
      role="option"
      id={id}
      ref={(node) => (listRef.current[index] = node)}
      // isActive prevents VoiceOver stuttering.
      aria-selected={isActive}
      isSelected={isActive}
      {...autoComplete.getItemProps({
        onClick,
      })}>
      {children}
    </StyledOption>
  )
}
