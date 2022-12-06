import * as React from 'react'

import type { UseDialogReturn } from './use-dialog'

type ContextType = UseDialogReturn | null

export const DialogContext = React.createContext<ContextType>(null)
