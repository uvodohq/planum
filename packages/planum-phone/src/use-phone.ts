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
import { useMemoizedFn, useUpdateEffect } from '@uvodohq/planum'
import { useLayoutEffect, useMemo, useRef } from 'react'

import type { UsePhoneProps } from './phone.types'

export function usePhone(props: UsePhoneProps) {
  const { labelKey, state } = props

  const {
    isOpen,
    activeIndex,
    selectedIndex,
    search,
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
  const dismiss = useDismiss(floatingCtx, { bubbles: false })
  const role = useRole(floatingCtx)
  const navigation = useListNavigation(floatingCtx, {
    listRef: listItemsRef,
    activeIndex,
    selectedIndex,
    onNavigate,
    // searchable Navigation Options
    loop: true,
    focusItemOnOpen: false,
    virtual: true,
    allowEscape: true,
  })
  const interactions = useInteractions([click, dismiss, role])
  const searchInputInteractions = useInteractions([navigation])

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
      countryCode: item.id,
    })

    onChange?.(item.prefix)
  })

  const handleOptionClick = useMemoizedFn((index: number) => {
    handleSelect(index)
  })

  const handleKeyDownOnInput = useMemoizedFn((event: React.KeyboardEvent) => {
    if (event.key === 'Enter' && activeIndex !== null) {
      event.preventDefault()
      handleSelect(activeIndex)
    }
  })

  const handleKeyDown = useMemoizedFn((event: React.KeyboardEvent) => {
    handleKeyDownOnInput(event)

    // Only if not using typeahead.
    if (event.key === ' ' && !floatingCtx.dataRef.current.typing) {
      event.preventDefault()
      handleSelect(activeIndex)
    }
  })

  const onSearchInputChange = useMemoizedFn((value: string) => {
    updateState({
      activeIndex: null,
      search: value,
    })
  })

  // onClose focus input
  useUpdateEffect(() => {
    if (!isOpen) {
      phoneInputRef.current?.focus({ preventScroll: true })
    }
  }, [isOpen])

  // when popup open, scroll selected into view center
  useLayoutEffect(() => {
    if (isPositioned) {
      const itemEl = listItemsRef.current[selectedIndex as any]

      if (itemEl) {
        itemEl.scrollIntoView({
          behavior: 'auto',
          block: 'nearest',
          inline: 'start',
        })
      }
    }
  }, [isPositioned, selectedIndex, listItemsRef])

  const phone = useMemo(() => {
    // Prevent input losing focus on Firefox VoiceOver
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { 'aria-activedescendant': ignoreAria, ...floatingProps } =
      interactions.getFloatingProps(searchInputInteractions.getFloatingProps())

    return {
      ...floating,
      ...interactions,
      options,
      getFloatingProps: () => floatingProps,
      getItemProps: searchInputInteractions.getItemProps,
      isEmpty: options.length === 0,
      nodeId,
      noResultsId,
      buttonId,
      listboxId,
      searchInputInteractions,
      onSearchInputChange,
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
    searchInputInteractions,
    nodeId,
    noResultsId,
    buttonId,
    listboxId,
    floating,
    onSearchInputChange,
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
