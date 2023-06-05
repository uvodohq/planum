import * as Accordion from '@radix-ui/react-accordion'
import * as React from 'react'

import { Checkbox } from '../checkbox'
import { overlineCss, Paragraph } from '../text'
import { css, keyframes } from '../theme'
import { useSelectContext } from './context'
import { SelectDownIcon } from './icons'
import type { GroupItem } from './select.types'

const slideDown = keyframes({
  from: {
    height: 0,
  },
  to: {
    height: ' var(--radix-accordion-content-height)',
  },
})

const slideUp = keyframes({
  from: {
    height: 'var(--radix-accordion-content-height)',
  },
  to: {
    height: 0,
  },
})

const headerCss = css(overlineCss, {
  position: 'sticky',
  top: 0,
  zIndex: 3,
  bg: '$white',
})

const groupHeaderCss = css(overlineCss, {
  fontWeight: '$semibold',
  padding: 8,
  userSelect: 'none',
  transition: 'background-color 0.15s',
  outline: 'none',
  color: '$textDark',
  cursor: 'pointer',
  oneLineClamp: true,
  whiteSpace: 'nowrap',
  wordBreak: 'break-all',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  gap: 8,

  '&:focus': {
    backgroundColor: '$surface200',
    position: 'relative',
    zIndex: 2,
  },
  '&::marker': { display: 'none' },

  '&:hover': {
    backgroundColor: '$surface100',
  },

  [`&[data-state='open'] > span`]: {
    transform: 'rotate(0deg)',
  },
  [`&[data-state='closed'] > span`]: {
    transform: 'rotate(-90deg)',
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

const groupContentCss = css({
  overflow: 'hidden',

  [`&[data-state='open']`]: {
    animation: `${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
  [`&[data-state='closed']`]: {
    animation: `${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
})

const AccordionTrigger = React.forwardRef<{}, any>(
  ({ children, ...props }, forwardedRef) => (
    <Accordion.Header className={headerCss()}>
      <Accordion.Trigger
        className={groupHeaderCss()}
        {...props}
        ref={forwardedRef}>
        {children}
      </Accordion.Trigger>
    </Accordion.Header>
  ),
)

AccordionTrigger.displayName = 'AccordionTrigger'

const liCss = css({
  borderBottom: '1px solid $colors$surface200',
})

const AccordionContent = React.forwardRef<{}, any>(
  ({ children, ...props }, forwardedRef) => (
    <Accordion.Content
      className={groupContentCss()}
      {...props}
      ref={forwardedRef}>
      <ul>{children}</ul>
    </Accordion.Content>
  ),
)

AccordionContent.displayName = 'AccordionContent'

interface Props {
  group: GroupItem
  children: React.ReactNode
}

export const SelectOptionGroup = ({ children, group }: Props) => {
  const { state } = useSelectContext()
  const groupId = group.id.toString()
  const { selectedItemsMap, updateState, itemsMap, onChange, onSelect } = state

  const notFilteredGroup = itemsMap.get(groupId)

  const checkedCount = selectedItemsMap.get(groupId)?.length ?? 0
  const isAllChecked = checkedCount === notFilteredGroup.children.length
  const isIndeterminate = checkedCount > 0 && !isAllChecked

  const toggleGroup = (value: boolean) => {
    const selectedItemsOfGroup = value ? [...notFilteredGroup.children] : []
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
      onSelect(selectedItemsMap, selectedItemsOfGroup)
    }
  }

  return (
    <Accordion.Item value={groupId.toString()} asChild>
      <li className={liCss()}>
        <AccordionTrigger>
          <SelectDownIcon size={24} />
          <Checkbox
            isSelected={isAllChecked}
            isIndeterminate={isIndeterminate}
            aria-label={group.name}
            onChange={toggleGroup}
          />
          {group.name}
          {group.isDisabled && (
            <Paragraph css={{ color: '$textLight' }}>used</Paragraph>
          )}
        </AccordionTrigger>
        <AccordionContent>{children}</AccordionContent>
      </li>
    </Accordion.Item>
  )
}
