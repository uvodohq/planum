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
  useInteractions,
  useListNavigation,
  useRole,
  useTypeahead,
} from '@floating-ui/react'
import type { MutableRefObject } from 'react'
import { useMemo } from 'react'

import { useSelectState } from './use-select-state'

export interface UseSelectProps {
  listItemsRef: MutableRefObject<(HTMLElement | null)[]>
  listContentRef: MutableRefObject<(string | null)[]>
  matchWidth?: boolean
  position?: Placement
  items: any[]
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
  } = props

  const state = useSelectState({
    value,
    items,
  })

  const {
    isOpen,
    setIsOpen,
    activeIndex,
    setActiveIndex,
    selectedIndex,
    setSelectedIndex,
  } = state

  // subscribe popup tree context inside modal/dialog. for not closing modal on ESC
  const nodeId = useFloatingNodeId()

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
            maxHeight: `${200}px`,
            width: matchWidth ? `${rects.reference.width}px` : 'auto',
          })
        },
        padding: 8,
      }),
    ],
  })

  const context = floating.context

  // interactions
  const click = useClick(context, { event: 'mousedown' })
  const dismiss = useDismiss(context)
  const role = useRole(context, { role: 'listbox' })
  const navigation = useListNavigation(context, {
    listRef: listItemsRef,
    activeIndex,
    selectedIndex,
    onNavigate: setActiveIndex,
    loop: true, // allow looping.
  })
  const typeahead = useTypeahead(context, {
    listRef: listContentRef,
    activeIndex,
    selectedIndex,
    onMatch: isOpen ? setActiveIndex : setSelectedIndex,
  })

  const interactions = useInteractions([
    click,
    dismiss,
    role,
    navigation,
    typeahead,
  ])

  const select = useMemo(() => {
    return {
      isOpen,
      setIsOpen,
      selectedIndex,
      activeIndex,
      setActiveIndex,
      setSelectedIndex,
      items,
      isEmpty: items.length === 0,
      ...floating,
      ...interactions,
      nodeId,
    }
  }, [
    interactions,
    nodeId,
    floating,
    isOpen,
    setIsOpen,
    selectedIndex,
    items,
    activeIndex,
    setActiveIndex,
    setSelectedIndex,
  ])

  return select
}
