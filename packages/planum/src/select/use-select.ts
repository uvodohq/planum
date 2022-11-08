import type { Placement } from '@floating-ui/react-dom-interactions'
import {
  autoUpdate,
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
} from '@floating-ui/react-dom-interactions'
import { useUpdateEffect } from '@react-aria/utils'
import type { MutableRefObject } from 'react'
import { useLayoutEffect, useState } from 'react'

import type { SelectState } from './use-select-state'

export interface UseSelectProps {
  listItemsRef: MutableRefObject<(HTMLElement | null)[]>
  listContentRef: MutableRefObject<(string | null)[]>
  matchWidth?: boolean
  position?: Placement
}

export type UseSelect = ReturnType<typeof useSelect>

export default function useSelect(props: UseSelectProps, state: SelectState) {
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

  // subscribe portalled popup to the tree context. for selects inside modal
  const nodeId = useFloatingNodeId()

  const { x, y, reference, floating, strategy, context, refs, placement } =
    useFloating({
      open: isOpen,
      onOpenChange: setIsOpen,
      whileElementsMounted: autoUpdate,
      placement: position,
      middleware: [
        offset(4),
        size({
          apply({ rects, elements }) {
            Object.assign(elements.floating.style, {
              width: matchWidth ? `${rects.reference.width}px` : 'auto',
            })
          },
          padding: 8,
        }),
      ],
      nodeId,
    })

  const floatingRef = refs.floating

  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions(
    [
      useClick(context),
      useRole(context, { role: 'listbox' }),
      useDismiss(context, {
        // bubbles: false,
      }),
      useListNavigation(context, {
        listRef: listItemsRef,
        activeIndex,
        selectedIndex,
        onNavigate: setActiveIndex,
      }),
      useTypeahead(context, {
        listRef: listContentRef,
        onMatch: isOpen ? setActiveIndex : setSelectedIndex,
        activeIndex,
        selectedIndex,
      }),
    ],
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
      refs.reference.current?.focus()
    }
  }, [isOpen, refs])

  const direction = placement === 'bottom' ? 1 : -1

  const referenceProps = getReferenceProps({
    ref: reference,
  })

  const floatingProps = (config) =>
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
