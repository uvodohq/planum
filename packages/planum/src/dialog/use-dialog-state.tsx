import * as React from 'react'

import { DialogContext } from './dialog-context'

export const useDialogState = () => {
  const context = React.useContext(DialogContext)

  if (context == null) {
    throw new Error('Dialog components must be wrapped in <Dialog />')
  }

  return context
}
