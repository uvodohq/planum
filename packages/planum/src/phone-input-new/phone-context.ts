import { createContext, useContext } from 'react'

import type { PhoneState, UsePhoneReturn } from './phone.types'

export interface PhoneContextValue {
  phone: UsePhoneReturn
  state: PhoneState
}

export const PhoneContext = createContext({} as PhoneContextValue)

export function usePhoneContext() {
  return useContext(PhoneContext)
}
