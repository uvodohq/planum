import { createContext, useContext } from 'react'

import type { SelectState, UseSelectReturn } from './select.types'

export interface SelectContextValue {
  select: UseSelectReturn
  state: SelectState
}

export const SelectContext = createContext({} as SelectContextValue)

export function useSelectContext() {
  return useContext(SelectContext)
}
