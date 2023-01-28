import { useId } from '@floating-ui/react'
import { Box, Flag, styled, subheaderCss } from '@uvodohq/planum'

import type { PhoneOptionProps } from './phone.types'
import { usePhoneContext } from './phone-context'

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
  wordBreak: 'break-all',
  gap: 4,

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

interface OptionProps extends PhoneOptionProps {
  item: any
}

export const Option = (props: OptionProps) => {
  const { index = 0, item, ...rest } = props
  const { phone, state } = usePhoneContext()
  const { handleSelect, handleKeyDown, listItemsRef } = phone
  const { selectedIndex, activeIndex } = state

  const id = useId()

  const isSelected = selectedIndex === index
  const isActive = activeIndex === index

  const optionProps = {
    id,
    role: 'option',
    tabIndex: isActive ? 0 : -1,
    'aria-selected': isActive && isSelected,
    'data-selected': isSelected,
    ref: (node: HTMLLIElement | null) => {
      listItemsRef.current[index] = node
    },
    ...phone.getItemProps({
      onClick: () => handleSelect(index), // Handle pointer select.
      onKeyDown: handleKeyDown, // Handle keyboard select.
    }),
  }

  return (
    <StyledOption
      isSelected={isSelected}
      isFocused={isActive}
      {...optionProps}
      {...rest}>
      <Flag country={item?.id || ''} css={{ width: 24, minWidth: 24 }} />
      <Box css={{ oneLineClamp: true }}>{item.countryName}</Box>
      <Box as="span" css={{ color: '$textDisabled' }}>
        ({item.prefix})
      </Box>
    </StyledOption>
  )
}
