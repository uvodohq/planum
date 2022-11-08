import type React from 'react'
import { createContext } from 'react'

import type { UseAutoComplete } from './use-auto-complete'
import type { AutoCompleteState } from './use-auto-complete-state'

export interface ContextValue {
  listRef: React.MutableRefObject<Array<HTMLLIElement | null>>
  state: AutoCompleteState
  autoComplete: UseAutoComplete
}

export const AutoCompleteContext = createContext({} as ContextValue)
