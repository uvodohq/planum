import {
  autoUpdate,
  flip,
  offset,
  shift,
  size,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useListNavigation,
  useRole,
  useTypeahead,
} from '@floating-ui/react-dom-interactions'
import { useInteractOutside } from '@react-aria/interactions'
import { Children, cloneElement, isValidElement, useMemo, useRef } from 'react'
import { mergeRefs } from 'react-merge-refs'

export function useMenu(state, props, ref) {
  const { open, setOpen, activeIndex, setActiveIndex } = state
  const { matchWidth, align = 'bottom', children, trigger, ...rest } = props

  const listItemsRef = useRef<Array<HTMLButtonElement | null>>([])
  const listContentRef = useRef(
    Children.map(children, (child) =>
      isValidElement(child) ? child.props?.label : null,
    ) as Array<string | null>,
  )

  const { x, y, reference, floating, strategy, refs, context, placement } =
    useFloating<HTMLButtonElement>({
      open,
      onOpenChange: setOpen,
      placement: align,
      whileElementsMounted: autoUpdate,
      strategy: 'fixed',
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
        // referencePointerDown: true,
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

  const mergedReferenceRef = useMemo(
    () => mergeRefs([ref, reference]),
    [reference, ref],
  )

  const referenceProps = getReferenceProps({
    ...rest,
    ref: mergedReferenceRef,
    onClick(event) {
      event.stopPropagation()
      ;(event.currentTarget as HTMLButtonElement).focus()
      trigger?.props?.onClick?.(event)
    },
  })

  const getMenuItemProps = (index) => ({
    ...getItemProps({
      role: 'menuitem',
      ref(node: HTMLButtonElement) {
        listItemsRef.current[index] = node
      },
    }),
    closeMenu() {
      state.setOpen(false)
      refs.reference.current?.focus()
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
  }
}
