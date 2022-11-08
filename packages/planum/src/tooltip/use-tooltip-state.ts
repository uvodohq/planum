import type { offset, Placement } from '@floating-ui/react-dom-interactions'
import useControllableValue from 'ahooks/es/useControllableValue'

export interface UseTooltipStateProps {
  label: string
  placement?: Placement
  children: JSX.Element
  isOpen?: boolean
  defaultIsOpen?: boolean
  onChange?: (isOpen: boolean) => void
  offsetValue?: Parameters<typeof offset>[0]
  strategy?: 'absolute' | 'fixed'
}

export type UseTooltipState = ReturnType<typeof useTooltipState>

export default function useTooltipState(props: UseTooltipStateProps) {
  const { isOpen: value, defaultIsOpen: defaultValue = false, onChange } = props

  const [open, setOpen] = useControllableValue(
    {
      ...(value ? { value } : {}),
      onChange,
    },
    {
      defaultValue,
    },
  )

  return {
    isOpen: open,
    setOpen,
  }
}
