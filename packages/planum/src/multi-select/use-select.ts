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
  useRole,
} from '@floating-ui/react'
import { useMemo, useRef } from 'react'

import type { UseSelectProps } from './select.types'

export function useSelect(props: UseSelectProps) {
  const { matchWidth, position = 'bottom-start', state } = props
  const { isOpen, toggleOpen } = state
  const listItemsRef = useRef<Array<HTMLLIElement | null>>([]) // for store li elements

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

  const { context: floatingCtx } = floating

  // interactions
  const click = useClick(floatingCtx)
  const dismiss = useDismiss(floatingCtx, {
    bubbles: false,
  })
  const role = useRole(floatingCtx)

  const interactions = useInteractions([click, dismiss, role])

  const select = useMemo(() => {
    // Prevent input losing focus on Firefox VoiceOver
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { 'aria-activedescendant': ignoreAria, ...floatingProps } =
      interactions.getFloatingProps()

    return {
      ...floating,
      ...interactions,
      getFloatingProps: () => floatingProps,
      nodeId,
      noResultsId,
      buttonId,
      listboxId,
      matchWidth,
      listItemsRef,
      labelKey: 'name', // reduntant
    }
  }, [
    interactions,
    nodeId,
    noResultsId,
    buttonId,
    listboxId,
    floating,
    matchWidth,
    listItemsRef,
  ])

  return select
}
