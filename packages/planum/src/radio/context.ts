import type { RadioGroupState } from '@react-stately/radio'
import React, { useContext } from 'react'

interface RadioGroupContext {
  name?: string
  state: RadioGroupState
}

export const RadioContext = React.createContext<RadioGroupContext>(null as any)

export function useRadioProvider(): RadioGroupContext {
  return useContext(RadioContext)
}
