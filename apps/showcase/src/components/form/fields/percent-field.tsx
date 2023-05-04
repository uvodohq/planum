import type { InputNumberProps } from '@uvodohq/planum'
import type { UseControllerProps } from 'react-hook-form'

import { NumberField } from './number-field'

interface PercentFieldProps extends InputNumberProps, UseControllerProps<any> {
  name: string
  defaultValue?: number
}

export function PercentField(props: PercentFieldProps) {
  return (
    <NumberField
      placeholder="0"
      suffix="%"
      min={0}
      max={100}
      precision={0}
      {...props}
    />
  )
}
