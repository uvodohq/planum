import type { CheckboxGroupState } from '@react-stately/checkbox'
import React, { useContext } from 'react'

export const CheckboxGroupContext = React.createContext<CheckboxGroupState>(
  null as any,
)

export function useCheckboxGroupProvider(): CheckboxGroupState {
  return useContext(CheckboxGroupContext)
}
