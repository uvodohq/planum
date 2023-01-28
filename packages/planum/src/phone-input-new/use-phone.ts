import {
  autoUpdate,
  flip,
  offset,
  size,
  useClick,
  useDismiss,
  useFloating,
  useFloatingNodeId,
  useId,
  useInteractions,
  useListNavigation,
  useRole,
} from '@floating-ui/react'
import { useUpdateEffect } from '@react-aria/utils'
import { useLayoutEffect, useMemo, useRef } from 'react'

import useMemoizedFn from '../hooks/use-memoized-fn'
import type { UsePhoneProps } from './phone.types'

export function usePhone(props: UsePhoneProps) {
  const { labelKey, state } = props

  const {
    isOpen,
    activeIndex,
    selectedIndex,
    search,
    searchable,
    items,
    onChange,
    updateState,
    toggleOpen,
    onNavigate,
  } = state

  const listItemsRef = useRef<Array<HTMLLIElement | null>>([]) // for store li elements
  const phoneInputRef = useRef<HTMLInputElement>(null)

  // subscribe popup tree context inside modal/dialog. for not closing modal on ESC
  const nodeId = useFloatingNodeId()
  const noResultsId = useId()
  const buttonId = useId()
  const listboxId = useId()

  const floating = useFloating({
    open: isOpen,
    onOpenChange: toggleOpen,
    whileElementsMounted: autoUpdate,
    nodeId,
    middleware: [
      offset(4),
      flip({ padding: 8 }),
      size({
        apply({ rects, elements }) {
          Object.assign(elements.floating.style, {
            maxHeight: `${300}px`,
            width: `${rects.reference.width}px`,
          })
        },
        padding: 8,
      }),
    ],
  })

  const { context: floatingCtx, isPositioned } = floating

  // interactions
  const click = useClick(floatingCtx)
  const dismiss = useDismiss(floatingCtx)
  const role = useRole(floatingCtx)

  const searchableNavigationOptions = {
    loop: true,
    focusItemOnOpen: false,
    virtual: true,
    allowEscape: true,
  }

  const navigation = useListNavigation(floatingCtx, {
    listRef: listItemsRef,
    activeIndex,
    selectedIndex,
    onNavigate,
    ...searchableNavigationOptions,
  })

  const interactions = useInteractions([click, dismiss, role])
  const inputInteractions = useInteractions([navigation])

  const options = useMemo(() => {
    if (search) {
      return items.filter((item) =>
        item[labelKey].toLowerCase().includes(search.toLowerCase()),
      )
    }

    return items
  }, [items, labelKey, search])

  const handleSelect = useMemoizedFn((index: number | null) => {
    const foundIndex = items.findIndex(
      (item) => item.id === options[index as any].id,
    )
    const item = options[index as any]

    updateState({
      activeIndex: null,
      isOpen: false,
      selectedIndex: foundIndex,
      selectedItem: item,
    })

    onChange?.(item.prefix)
  })

  const handleOptionClick = useMemoizedFn((index: number) => {
    handleSelect(index)
  })

  const handleKeyDown = useMemoizedFn((event: React.KeyboardEvent) => {
    if (event.key === 'Enter' && activeIndex !== null) {
      event.preventDefault()
      handleSelect(activeIndex)
    }

    // Only if not using typeahead.
    if (event.key === ' ' && !floatingCtx.dataRef.current.typing) {
      event.preventDefault()
      handleSelect(activeIndex)
    }
  })

  const handleKeyDownOnInput = useMemoizedFn((event: React.KeyboardEvent) => {
    if (event.key === 'Enter' && activeIndex !== null) {
      event.preventDefault()
      handleSelect(activeIndex)
    }
  })

  const handleInputChange = useMemoizedFn((value: string) => {
    updateState({
      activeIndex: null,
      search: value,
    })
  })

  // onClose  focus input
  useUpdateEffect(() => {
    if (!isOpen) {
      phoneInputRef.current?.focus({ preventScroll: true })
    }
  }, [isOpen])

  // when popup open, scroll selected into view center
  useLayoutEffect(() => {
    if (isPositioned && searchable) {
      const itemEl = listItemsRef.current[selectedIndex as any]

      if (itemEl) {
        itemEl.scrollIntoView({
          behavior: 'auto',
          block: 'nearest',
          inline: 'start',
        })
      }
    }
  }, [isPositioned, selectedIndex, listItemsRef, searchable])

  const phone = useMemo(() => {
    // Prevent input losing focus on Firefox VoiceOver
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { 'aria-activedescendant': ignoreAria, ...floatingProps } =
      interactions.getFloatingProps(inputInteractions.getFloatingProps())

    return {
      options,
      isEmpty: options.length === 0,
      ...floating,
      ...interactions,
      getFloatingProps: () => floatingProps,
      getItemProps: inputInteractions.getItemProps,
      nodeId,
      noResultsId,
      buttonId,
      listboxId,
      inputInteractions,
      handleInputChange,
      handleOptionClick,
      handleKeyDownOnInput,
      handleSelect,
      handleKeyDown,
      listItemsRef,
      labelKey,
      phoneInputRef,
    }
  }, [
    interactions,
    inputInteractions,
    nodeId,
    noResultsId,
    buttonId,
    listboxId,
    floating,
    handleInputChange,
    handleOptionClick,
    handleKeyDownOnInput,
    handleSelect,
    options,
    handleKeyDown,
    listItemsRef,
    labelKey,
    phoneInputRef,
  ])

  return phone
}
