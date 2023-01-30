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
import { useLayoutEffect, useMemo, useRef } from 'react'

import { useLatest } from '../hooks'
import useMemoizedFn from '../hooks/use-memoized-fn'
import type { UseSelectProps } from './select.types'

export function useSelect(props: UseSelectProps) {
  const { matchWidth, position = 'bottom-start', labelKey, state } = props

  const {
    isOpen,
    activeIndex,
    selectedIndex,
    search,
    searchable,
    items,
    onChange,
    onSelect,
    updateState,
    toggleOpen,
    onMatchTypeahead,
    onNavigate,
  } = state

  const listItemsRef = useRef<Array<HTMLLIElement | null>>([]) // for store li elements
  const listContentRef = useLatest<string[]>(
    items.map((item) => item[labelKey]), // for typeahead search
  )

  // subscribe popup tree context inside modal/dialog. for not closing modal on ESC
  const nodeId = useFloatingNodeId()
  const noResultsId = useId()
  const buttonId = useId()
  const listboxId = useId()

  const floating = useFloating({
    open: isOpen,
    onOpenChange: toggleOpen,
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

  const { context: floatingCtx, isPositioned } = floating

  // interactions
  const click = useClick(floatingCtx)
  const dismiss = useDismiss(floatingCtx, {
    bubbles: false,
  })
  const role = useRole(floatingCtx)
  const typeahead = useTypeahead(floatingCtx, {
    listRef: listContentRef,
    activeIndex,
    selectedIndex,
    onMatch: onMatchTypeahead,
  })

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
    ...(searchable ? searchableNavigationOptions : {}),
  })

  const interactions = useInteractions([
    click,
    dismiss,
    role,
    ...(searchable ? [undefined, undefined] : [navigation, typeahead]),
  ])

  const inputInteractions = useInteractions([navigation])

  const options = useMemo(() => {
    if (searchable) {
      return items.filter((item) =>
        item[labelKey].toLowerCase().includes(search?.toLowerCase()),
      )
    }

    return items
  }, [items, labelKey, search, searchable])

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

    onChange?.(item.id)
    onSelect?.(item.id, item)
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

  const select = useMemo(() => {
    // Prevent input losing focus on Firefox VoiceOver
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { 'aria-activedescendant': ignoreAria, ...floatingProps } =
      interactions.getFloatingProps(
        searchable ? inputInteractions.getFloatingProps() : {},
      )

    return {
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
      handleKeyDownOnInput,
      handleSelect,
      handleKeyDown,
      matchWidth,
      listItemsRef,
      labelKey,
    }
  }, [
    interactions,
    inputInteractions,
    nodeId,
    noResultsId,
    buttonId,
    listboxId,
    floating,
    searchable,
    handleInputChange,
    handleOptionClick,
    handleKeyDownOnInput,
    handleSelect,
    options,
    handleKeyDown,
    matchWidth,
    listItemsRef,
    labelKey,
  ])

  return select
}
