import { useId } from '@floating-ui/react'
import { useCallback, useMemo } from 'react'

import useMemoizedFn from '../hooks/use-memoized-fn'
import { subheaderCss } from '../text'
import { styled } from '../theme'
import type { SelectOptionProps } from './select.types'
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

interface OptionProps extends SelectOptionProps {
  item: any
}

export const Option = (props: OptionProps) => {
  const { index = 0, renderOption, item } = props
  const { select, state } = useSelectContext()
  const { handleSelect, handleKeyDown, matchWidth, listItemsRef, labelKey } =
    select
  const { selectedIndex, activeIndex, searchable } = state

  const id = useId()

  const isSelected = selectedIndex === index
  const isActive = activeIndex === index

  const optionProps = {
    id,
    role: 'option',
    tabIndex: isActive ? 0 : -1,
    'aria-selected': isActive && isSelected,
    'data-selected': isSelected,
    matchWidth,
    ref: (node: HTMLLIElement | null) => {
      listItemsRef.current[index] = node
    },
    ...select.getItemProps({
      onClick: () => handleSelect(index), // Handle pointer select.
      onKeyDown: searchable ? undefined : handleKeyDown, // Handle keyboard select.
    }),
  }

  const DefaultOptionComponent = useMemoizedFn((props: any) => {
    return (
      <StyledOption
        isSelected={isSelected}
        isFocused={isActive}
        {...optionProps}
        {...props}
      />
    )
  })

  if (typeof renderOption === 'function') {
    return renderOption({
      ...optionProps,
      item,
      select,
      state,
      OptionComponent: DefaultOptionComponent,
      index,
    })
  }

  return <DefaultOptionComponent>{item[labelKey]}</DefaultOptionComponent>
}
