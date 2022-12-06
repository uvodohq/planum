import {
  FloatingNode,
  FloatingTree,
  useFloatingParentNodeId,
} from '@floating-ui/react-dom-interactions'
import * as React from 'react'

import { DialogContext } from './dialog-context'
import type { UseDialogProps } from './use-dialog'
import { useDialog } from './use-dialog'

export type DialogProps = React.PropsWithChildren<UseDialogProps>

function DialogComponent(props: DialogProps) {
  const { children, ...options } = props

  const dialog = useDialog(options)

  return (
    <DialogContext.Provider value={dialog}>
      <FloatingNode id={dialog.nodeId}>{children}</FloatingNode>
    </DialogContext.Provider>
  )
}

export const Dialog = (props: DialogProps) => {
  const parentId = useFloatingParentNodeId()
  const isFirstRootDialog = parentId === null

  if (isFirstRootDialog) {
    return (
      // flaoting tree provides to close popups properly when nested modals,selects exist inside dialog.
      <FloatingTree>
        <DialogComponent {...props} />
      </FloatingTree>
    )
  }

  return <DialogComponent {...props} />
}
