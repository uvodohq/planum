import { useId } from '@floating-ui/react-dom-interactions'
import useControllableValue from 'ahooks/es/useControllableValue'

export type ModalState = ReturnType<typeof useModalState>

export interface ModalStateProps {
  isOpen?: boolean
  defaultIsOpen?: boolean
  onOpenChange?: (isOpen: boolean) => void
}

export function useModalState(props?: ModalStateProps) {
  const {
    isOpen: value,
    defaultIsOpen: defaultValue = false,
    onOpenChange: onChange = () => {},
  } = props || {}

  const [isOpen, setIsOpen] = useControllableValue(
    {
      ...(value ? { value } : {}),
      onChange,
    },
    {
      defaultValue,
    },
  )

  const id = useId()
  const labelId = `${id}-label`
  const descriptionId = `${id}-description`

  return {
    labelId,
    descriptionId,
    isOpen,
    setIsOpen,
    openModal: (event?: any) => {
      event?.stopPropagation()
      event?.preventDefault()

      setIsOpen(true)
    },
    closeModal: (event?: any) => {
      event?.stopPropagation()
      event?.preventDefault()

      setIsOpen(false)
    },
  }
}
