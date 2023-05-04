import type React from 'react'
import { createContext } from 'react'

import type { UseAutoCompleteReturn } from './use-auto-complete'
import type { AutoCompleteState } from './use-auto-complete-state'

// TODO: fix any types
export interface ContextValue {
  listRef: React.MutableRefObject<Array<HTMLLIElement | null>>
  state: AutoCompleteState
  autoComplete: UseAutoCompleteReturn

  items: any
  labelKey: any
  onSelect: any
}

export const AutoCompleteContext = createContext({} as ContextValue)
