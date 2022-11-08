import type { ContextData } from '@floating-ui/react-dom-interactions'
import type React from 'react'
import { createContext } from 'react'

import type { Value } from './select-component'
import type { UseSelect } from './use-select'
import type { SelectState } from './use-select-state'

export interface SelectContextValue {
  listRef: React.MutableRefObject<Array<HTMLLIElement | null>>
  onChange: (value: Value) => void
  onSelect: (value: Value, selected: any) => void
  dataRef: ContextData

  state: SelectState
  select: UseSelect
  matchWidth?: boolean
}

export const SelectContext = createContext({} as SelectContextValue)
