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
import { useUpdateEffect } from '@react-aria/utils'
import type { MutableRefObject } from 'react'
import { useLayoutEffect, useState } from 'react'

import { useMediaQuery } from '../hooks'
import type { SelectState } from './use-select-state'

export interface UseSelectProps {
  listItemsRef: MutableRefObject<(HTMLElement | null)[]>
  listContentRef: MutableRefObject<(string | null)[]>
  matchWidth?: boolean
  position?: Placement
}

export interface UseSelectReturn {
  getFloatingProps: (props?: any) => Record<string, unknown>
  referenceProps: Record<string, unknown>
  getItemProps: (props?: any) => Record<string, unknown>
  direction: any
  context: any
  refs: any
  nodeId: string
  strategy: string
  x: number | null
  y: number | null
}

export function useSelect(
  props: UseSelectProps,
  state: SelectState,
): UseSelectReturn {
  const {
    listItemsRef,
    listContentRef,
    matchWidth,
    position = 'bottom-end',
  } = props

  const {
    isOpen,
    setIsOpen,
    activeIndex,
    setActiveIndex,
    selectedIndex,
    setSelectedIndex,
    prevActiveIndex,
  } = state

  const [controlledScrolling, setControlledScrolling] = useState(false)

  // subscribe portalled popup tree context. for selects inside modal/dialog/popover
  const nodeId = useFloatingNodeId()

  const { x, y, reference, floating, strategy, context, refs, placement } =
    useFloating({
      open: isOpen,
      onOpenChange: setIsOpen,
      whileElementsMounted: autoUpdate,
      placement: position,
      middleware: [
        offset(4),
        flip({ padding: 8 }),
        size({
          apply({ rects, elements, availableHeight }) {
            const maxAvailableHeight =
              availableHeight < 200
                ? 200
                : availableHeight > 400
                ? 400
                : availableHeight

            Object.assign(elements.floating.style, {
              maxHeight: `${maxAvailableHeight}px`,
              width: matchWidth ? `${rects.reference.width}px` : 'auto',
            })
          },
          padding: 8,
        }),
      ],
      nodeId,
    })

  const floatingRef = refs.floating

  // interactions
  const click = useClick(context, { event: 'mousedown' })
  const dismiss = useDismiss(context)
  const role = useRole(context, { role: 'listbox' })
  const navigation = useListNavigation(context, {
    listRef: listItemsRef,
    activeIndex,
    selectedIndex,
    onNavigate: setActiveIndex,
    // loop: true, // This is a large list, allow looping.
  })
  const typeahead = useTypeahead(context, {
    listRef: listContentRef,
    activeIndex,
    selectedIndex,
    onMatch: isOpen ? setActiveIndex : setSelectedIndex,
  })

  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions(
    [click, dismiss, role, navigation, typeahead],
  )

  // Scroll the active or selected item into view when in `controlledScrolling`
  // mode (i.e. arrow key nav).
  useLayoutEffect(() => {
    const floating = floatingRef.current

    if (isOpen && controlledScrolling && floating) {
      const item =
        activeIndex != null
          ? listItemsRef.current[activeIndex]
          : selectedIndex != null
          ? listItemsRef.current[selectedIndex]
          : null

      if (item && prevActiveIndex != null) {
        const itemHeight =
          listItemsRef.current[prevActiveIndex]?.offsetHeight ?? 0

        const floatingHeight = floating.offsetHeight
        const top = item.offsetTop
        const bottom = top + itemHeight

        if (top < floating.scrollTop) {
          floating.scrollTop -= floating.scrollTop - top + 5
        } else if (bottom > floatingHeight + floating.scrollTop) {
          floating.scrollTop += bottom - floatingHeight - floating.scrollTop + 5
        }
      }
    }
  }, [
    isOpen,
    controlledScrolling,
    prevActiveIndex,
    activeIndex,
    floatingRef,
    selectedIndex,
  ])

  // Sync the height and the scrollTop values
  useLayoutEffect(() => {
    requestAnimationFrame(() => {
      const floating = refs.floating.current
      if (isOpen && floating && floating.clientHeight < floating.scrollHeight) {
        const item = listItemsRef.current[selectedIndex]
        if (item) {
          floating.scrollTop =
            item.offsetTop - floating.offsetHeight / 2 + item.offsetHeight / 2
        }
      }
    })
  }, [isOpen, selectedIndex, refs])

  // return focus to reference when the popup is closed, fix for selects in modal
  useUpdateEffect(() => {
    if (!isOpen) {
      // @ts-expect-error - fix focus
      refs.reference.current?.focus()
    }
  }, [isOpen, refs])

  const direction = placement === 'bottom' ? 1 : -1

  const referenceProps = getReferenceProps({
    ref: reference,
  })

  const floatingProps = (config?: React.HTMLProps<HTMLElement>) =>
    isOpen
      ? getFloatingProps({
          ref: floating,
          onPointerEnter() {
            setControlledScrolling(false)
          },
          onPointerMove() {
            setControlledScrolling(false)
          },
          onKeyDown() {
            setControlledScrolling(true)
          },
          ...config,
        })
      : {}

  return {
    getFloatingProps: floatingProps,
    referenceProps,
    direction,
    context,
    getItemProps,
    refs,
    nodeId,
    strategy,
    x,
    y,
  }
}
