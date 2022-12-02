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
} from '@floating-ui/react-dom-interactions'
import type { MutableRefObject } from 'react'
import { useLayoutEffect } from 'react'

import type { AutoCompleteState } from './use-auto-complete-state'

export interface UseAutoCompleteProps {
  listRef: MutableRefObject<(HTMLLIElement | null)[]>
}

export interface UseAutoCompleteReturn {
  getFloatingProps: (props: any) => Record<string, unknown>
  getReferenceProps: (props: any) => Record<string, unknown>
  getItemProps: (props: any) => Record<string, unknown>
  nodeId: string
  [key: string]: any
}

export function useAutoComplete(
  props: UseAutoCompleteProps,
  state: AutoCompleteState,
): UseAutoCompleteReturn {
  const { listRef } = props

  const { isOpen, setIsOpen, activeIndex, setActiveIndex } = state

  // subscribe portalled popup to the tree context. for cases inside modal
  const nodeId = useFloatingNodeId()

  const floating = useFloating<HTMLDivElement>({
    open: isOpen,
    onOpenChange: setIsOpen,
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(4),
      flip(),
      size({
        apply({ rects, elements }) {
          Object.assign(elements.floating.style, {
            width: `${rects.reference.width}px`,
            maxHeight: `${200}px`,
          })
        },
        padding: 8,
      }),
    ],
    nodeId,
  })

  useLayoutEffect(() => {
    requestAnimationFrame(() => {
      if (activeIndex != null) {
        listRef.current[activeIndex]?.scrollIntoView({ block: 'nearest' })
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex])

  const { context } = floating
  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions(
    [
      useRole(context, { role: 'listbox' }),
      useDismiss(context, {
        bubbles: false,
      }),
      useClick(context, {
        pointerDown: true,
      }),
      useListNavigation(context, {
        listRef,
        activeIndex,
        onNavigate: setActiveIndex,
        virtual: true,
        focusItemOnHover: false,
      }),
    ],
  )

  return {
    getFloatingProps,
    getReferenceProps,
    getItemProps,
    nodeId,
    ...floating,
  }
}
