import type { InputNumberProps } from '@uvodohq/planum'
import type { UseControllerProps } from 'react-hook-form'

import { NumberField } from './number-field'

interface QuantityFieldProps extends InputNumberProps, UseControllerProps<any> {
  name: string
  defaultValue?: number
}

/** enters only positive integer quantites like product count  */
export function QuantityField(props: QuantityFieldProps) {
  return <NumberField placeholder="0" min={0} precision={0} {...props} />
}
