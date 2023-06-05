import { useId } from '@floating-ui/react'

import { Checkbox } from '../checkbox'
import { Flag } from '../flag'
import { Flex } from '../layout'
import { Paragraph, subheaderCss } from '../text'
import { styled } from '../theme'
import { useSelectContext } from './context'
import type { SelectOptionProps } from './select.types'

const StyledOption = styled('li', subheaderCss, {
  padding: 8,
  userSelect: 'none',
  transition: 'background-color 0.15s',
  outline: 'none',
  color: '$textDark',
  fontWeight: '$regular',
  cursor: 'pointer',
  oneLineClamp: true,
  whiteSpace: 'nowrap',
  pl: 70,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 8,

  // from floating
  '&:focus': {
    backgroundColor: '$surface200',
    position: 'relative',
    zIndex: 1,
  },

  '&::marker': { display: 'none' },

  '&:hover': {
    backgroundColor: '$surface100',
  },

  variants: {
    isFocused: {
      true: {
        backgroundColor: '$surface200',
        '&:hover': {},
      },
    },
    isDisabled: {
      true: {
        cursor: 'default',
        '&:hover': {
          background: 'none',
        },
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
    asHeader: {
      true: {
        paddingLeft: 8,
        borderBottom: '1px solid $colors$surface200',
        fontSize: '$min',
        lineHeight: '$xxl',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        fontWeight: '$semibold',
        gap: 12,
      },
    },
  },
  compoundVariants: [
    {
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
  groupId: string
  asHeader?: boolean
  isDisabled?: boolean
}

export const Option = (props: OptionProps) => {
  const { index = 0, item, groupId, isDisabled = false, ...rest } = props
  const { select, state } = useSelectContext()
  const { matchWidth, listItemsRef, labelKey } = select
  const { activeIndex, selectedItemsMap, updateState, onChange, onSelect } =
    state

  const id = useId()
  const isChecked = selectedItemsMap
    .get(groupId)
    ?.some(({ id }) => id === item.id)

  const isSelected = isChecked
  const isActive = activeIndex === index

  const toggleCheckbox = (value: boolean) => {
    let selectedItemsOfGroup = [...selectedItemsMap.get(groupId)!]

    if (value) {
      selectedItemsOfGroup.push(item)
    } else {
      selectedItemsOfGroup = selectedItemsOfGroup.filter(
        ({ id }) => id !== item.id,
      )
    }

    selectedItemsMap.set(groupId, selectedItemsOfGroup)

    if (typeof onChange === 'function') {
      const newSelectedIdsValue = [...selectedItemsMap.values()]
        .flat()
        .map((item) => item.id)
      onChange(newSelectedIdsValue)
    } else {
      updateState({
        selectedItemsMap,
      })
    }

    if (typeof onSelect === 'function') {
      onSelect(selectedItemsMap, item)
    }
  }

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
      onClick: () => toggleCheckbox(!isChecked), // Handle pointer select.
    }),
  }

  return (
    <StyledOption
      isFocused={isActive}
      {...optionProps}
      {...rest}
      isDisabled={isDisabled}>
      <Flex
        css={{
          alignItems: 'center',
          gap: '$8',
          opacity: isDisabled ? 0.4 : 1,
        }}>
        <Checkbox
          isSelected={isChecked || isDisabled}
          onChange={toggleCheckbox}
          aria-label={item[labelKey]}
        />
        {item.countryCode && <Flag country={item.countryCode} />}
        {item[labelKey]}
      </Flex>

      {isDisabled && (
        <Paragraph
          css={{
            color: '$textDisabled',
            textTransform: 'lowercase',
            fontWeight: '$regular',
            letterSpacing: 0,
          }}>
          used
        </Paragraph>
      )}
    </StyledOption>
  )
}
