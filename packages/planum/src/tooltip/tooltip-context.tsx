import { createContext } from 'react'

import type { useTooltip } from './use-tooltip'

type ContextType = ReturnType<typeof useTooltip> | null

export const TooltipContext = createContext<ContextType>(null)
