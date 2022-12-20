import {
  FloatingNode,
  FloatingTree,
  useFloatingParentNodeId,
} from '@floating-ui/react-dom-interactions'
import * as React from 'react'

import { PopoverContext } from './popover-context'
import type { UsePopoverProps } from './use-popover'
import { usePopover } from './use-popover'

export type PopoverProps = React.PropsWithChildren<UsePopoverProps>

function PopoverComponent(props: PopoverProps) {
  const { children, ...options } = props

  const popover = usePopover(options)

  return (
    <PopoverContext.Provider value={popover}>
      <FloatingNode id={popover.nodeId}>{children}</FloatingNode>
    </PopoverContext.Provider>
  )
}

export const Popover = (props: PopoverProps) => {
  const parentId = useFloatingParentNodeId()
  const isFirstRootPopover = parentId === null

  if (isFirstRootPopover) {
    return (
      // flaoting tree provides to close popups properly when nested modals,selects exist inside popover.
      <FloatingTree>
        <PopoverComponent {...props} />
      </FloatingTree>
    )
  }

  return <PopoverComponent {...props} />
}
