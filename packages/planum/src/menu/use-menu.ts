import type { UseFloatingReturn } from '@floating-ui/react'
import {
  autoUpdate,
  flip,
  offset,
  shift,
  size,
  useClick,
  useDismiss,
  useFloating,
  useFloatingNodeId,
  useInteractions,
  useListNavigation,
  useMergeRefs,
  useRole,
  useTypeahead,
} from '@floating-ui/react'
import { useInteractOutside } from '@react-aria/interactions'
import { Children, cloneElement, isValidElement, useMemo, useRef } from 'react'

import type { MenuProps } from './menu'
import type { UseMenuState } from './use-menu-state'

export interface UseMenuReturn {
  floating: Partial<UseFloatingReturn<HTMLButtonElement>>
  referenceProps: Record<string, unknown>
  [key: string]: unknown
}

export function useMenu(
  state: UseMenuState,
  props: MenuProps,
  ref: any,
): UseMenuReturn {
  const { open, setOpen, activeIndex, setActiveIndex } = state
  const { matchWidth, align = 'bottom', children, trigger, ...rest } = props

  const listItemsRef = useRef<Array<HTMLButtonElement | null>>([])
  const listContentRef = useRef(
    Children.map(children, (child) =>
      isValidElement(child) ? child.props?.label : null,
    ) as Array<string | null>,
  )

  // subscribe portalled popup to the tree context. for selects inside modal
  const nodeId = useFloatingNodeId()

  const { x, y, reference, floating, strategy, refs, context, placement } =
    useFloating<HTMLButtonElement>({
      open,
      onOpenChange: setOpen,
      placement: align,
      whileElementsMounted: autoUpdate,
      strategy: 'fixed',
      nodeId,
      middleware: [
        offset(4),
        flip(),
        shift(),
        size({
          apply({ rects, availableHeight, elements }) {
            let height = Math.min(450, availableHeight)
            height = Math.max(100, height)

            const matchedWidth = rects.reference.width

            const width = matchWidth || matchedWidth > 180 ? matchedWidth : 180

            Object.assign(elements.floating.style, {
              width: `${width}px`,
              maxHeight: `${height}px`,
            })
          },
          padding: 8,
        }),
      ],
    })

  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions(
    [
      useClick(context),
      useRole(context, { role: 'menu' }),
      useDismiss(context, {
        bubbles: false,
      }),
      useListNavigation(context, {
        listRef: listItemsRef,
        activeIndex,
        onNavigate: setActiveIndex,
      }),
      useTypeahead(context, {
        listRef: listContentRef,
        onMatch: open ? setActiveIndex : undefined,
        activeIndex,
        enabled: open,
      }),
    ],
  )

  const mergedReferenceRef = useMergeRefs([ref, reference])

  const referenceProps = getReferenceProps({
    ...rest,
    ref: mergedReferenceRef,
    onClick(event) {
      event.stopPropagation()
      ;(event.currentTarget as HTMLButtonElement).focus()
      trigger?.props?.onClick?.(event)
    },
  })

  const getMenuItemProps = (index: number) => ({
    ...getItemProps({
      role: 'menuitem',
      ref(node: HTMLButtonElement) {
        listItemsRef.current[index] = node
      },
    }),
    closeMenu() {
      state.setOpen(false)
      refs.floating.current?.focus()
    },
  })

  const renderMenuItems = () => {
    return Children.map(
      children,
      (child, index) =>
        isValidElement(child) && cloneElement(child, getMenuItemProps(index)),
    )
  }

  function onInteractOutside() {
    state.setOpen(false)
  }

  useInteractOutside({
    ref: refs.floating,
    onInteractOutside,
  })

  return {
    floating: { x, y, reference, floating, strategy, refs, context, placement },
    interactions: { getReferenceProps, getFloatingProps, getItemProps },
    referenceProps,
    getMenuItemProps,
    renderMenuItems,
    nodeId,
  }
}
