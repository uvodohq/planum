import { useState } from 'react'

export interface UseAutoCompleteStateProps {
  defaultValue?: string
  value?: string
  onChange?: (value: string) => void
}

export type AutoCompleteState = ReturnType<typeof useAutoCompleteState>

function useAutoCompleteState(props?: UseAutoCompleteStateProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [inputValue, setInputValue] = useState('')

  return {
    isOpen,
    setIsOpen,
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
    //
    inputValue,
    setInputValue,
    //
    activeIndex,
    setActiveIndex,
  }
}

export default useAutoCompleteState
