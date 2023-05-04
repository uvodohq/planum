import { createContext } from 'react'

import type { ModalState } from './use-modal-state'

export const ModalContext = createContext({} as ModalState)
