import { useState } from 'react'

import { useControllableValue } from '../hooks'

interface UseMenuStateProps {
  isOpen?: boolean
  defaultIsOpen?: boolean
  onChangeOpen?: (isOpen: boolean) => void
}

export type UseMenuState = ReturnType<typeof useMenuState>

export function useMenuState(props: UseMenuStateProps) {
  const { isOpen, onChangeOpen } = props

  const [open, setOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return {
    open: isOpen ?? open,
    setOpen: onChangeOpen ?? setOpen,
    activeIndex,
    setActiveIndex,
  }
}
