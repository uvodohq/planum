import type { Placement } from '@floating-ui/react'
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
  useTypeahead,
} from '@floating-ui/react'
import { useUpdateEffect } from '@react-aria/utils'
import type { MutableRefObject } from 'react'
import { useEffect, useLayoutEffect, useMemo, useRef } from 'react'

import useMemoizedFn from '../hooks/use-memoized-fn'
import { useSelectState } from './use-phone-state'

export interface UseSelectProps {
  listItemsRef: MutableRefObject<(HTMLElement | null)[]>
  listContentRef: MutableRefObject<(string | null)[]>
  matchWidth?: boolean
  position?: Placement
  items: any[]
  labelKey: string
  value?: any
}

export type UseSelectReturn = ReturnType<typeof useSelect>

export function useSelect(props: UseSelectProps) {
  const {
    listItemsRef,
    listContentRef,
    matchWidth,
    position = 'bottom-start',
    value,
    items,
    labelKey,
    onChange,
    onSelect,
    defaultCountry,
  } = props

  const state = useSelectState({
    value,
    items,
    defaultCountry,
  })

  const {
    isOpen,
    setIsOpen,
    activeIndex,
    setActiveIndex,
    selectedIndex,
    setSelectedIndex,
    search,
    setSearch,
    selectedItem,
    setSelectedItem,
    searchable,
    _valuePhone,
    setValuePhone,
    handleChangePhone,
    onCountrySelect,
    onPhoneNumberChange,
  } = state

  // subscribe popup tree context inside modal/dialog. for not closing modal on ESC
  const nodeId = useFloatingNodeId()
  const noResultsId = useId()
  const buttonId = useId()
  const listboxId = useId()

  const phoneInputRef = useRef(null)

  const floating = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    whileElementsMounted: autoUpdate,
    placement: position,
    nodeId,
    middleware: [
      offset(4),
      flip({ padding: 8 }),
      size({
        apply({ rects, elements }) {
          Object.assign(elements.floating.style, {
            maxHeight: `${300}px`,
            width: matchWidth ? `${rects.reference.width}px` : 'auto',
          })
        },
        padding: 8,
      }),
    ],
  })

  const context = floating.context

  // interactions
  const click = useClick(context)
  const dismiss = useDismiss(context)
  const role = useRole(context)
  const typeahead = useTypeahead(context, {
    listRef: listContentRef,
    activeIndex,
    selectedIndex,
    onMatch: isOpen ? setActiveIndex : setSelectedIndex,
  })

  const searchableNavigationOptions = {
    loop: true,
    focusItemOnOpen: false,
    virtual: true,
    allowEscape: true,
  }

  const navigation = useListNavigation(context, {
    listRef: listItemsRef,
    activeIndex,
    selectedIndex,
    onNavigate: isOpen ? setActiveIndex : undefined,
    ...(searchable ? searchableNavigationOptions : {}),
  })

  const interactions = useInteractions([
    click,
    dismiss,
    role,
    searchable ? undefined : navigation,
    searchable ? undefined : typeahead,
  ])

  const inputInteractions = useInteractions([navigation])

  const options = useMemo(
    () =>
      items.filter((item) =>
        item[0].toLowerCase().includes(search.toLowerCase()),
      ),
    [items, labelKey, search],
  )

  const handleSelect = useMemoizedFn((index: number) => {
    setActiveIndex(null)
    setIsOpen(false)

    const foundIndex = items.findIndex((item) => item[0] === options[index][0])
    const item = options[index]
    setSelectedIndex(foundIndex)
    setSelectedItem(item)
    onCountrySelect(item)

    // onChange(item.id)
    // onSelect(item.id, item)
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
    if (event.key === ' ' && !floating.context.dataRef.current.typing) {
      event.preventDefault()
      handleSelect(activeIndex)
    }
  })

  const handleKeyDownInput = useMemoizedFn((event: React.KeyboardEvent) => {
    if (event.key === 'Enter' && activeIndex !== null) {
      event.preventDefault()
      handleSelect(activeIndex)
    }
  })

  const handleInputChange = useMemoizedFn((searchValue) => {
    setActiveIndex(null)
    setSearch(searchValue)
  })

  // when popup open, scroll selected into view center
  useLayoutEffect(() => {
    if (floating.isPositioned && searchable) {
      const itemEl = listItemsRef.current[selectedIndex]

      if (itemEl) {
        itemEl.scrollIntoView({
          behavior: 'auto',
          block: 'nearest',
          inline: 'start',
        })
      }
    }
  }, [floating.isPositioned, selectedIndex, listItemsRef, searchable])

  useEffect(() => {
    if (!isOpen) {
      setSearch('')
      setActiveIndex(null)
    }
  }, [isOpen, setActiveIndex])

  // onClose  focus input
  useUpdateEffect(() => {
    if (!isOpen) {
      phoneInputRef.current?.focus({ preventScroll: true })
    }
  }, [isOpen])

  // Prevent input losing focus on Firefox VoiceOver
  const { 'aria-activedescendant': ignoreAria, ...floatingProps } =
    interactions.getFloatingProps(
      searchable ? inputInteractions.getFloatingProps() : {},
    )

  const select = {
    isOpen,
    setIsOpen,
    selectedIndex,
    activeIndex,
    setActiveIndex,
    setSelectedIndex,
    items,
    options,
    isEmpty: options.length === 0,
    ...floating,
    ...interactions,
    getFloatingProps: () => floatingProps,
    getItemProps: searchable
      ? inputInteractions.getItemProps
      : interactions.getItemProps,
    nodeId,
    noResultsId,
    buttonId,
    listboxId,
    inputInteractions,
    handleInputChange,
    handleOptionClick,
    handleKeyDownInput,
    search,
    searchable,
    handleSelect,
    selectedItem,
    handleKeyDown,
    _valuePhone,
    setValuePhone,
    handleChangePhone,
    onPhoneNumberChange,
    phoneInputRef,
  }

  console.log('select', select)

  return select
}
