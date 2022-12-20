import * as React from 'react'

import type { UsePopoverReturn } from './use-popover'

type ContextType = UsePopoverReturn | null

export const PopoverContext = React.createContext<ContextType>(null)
