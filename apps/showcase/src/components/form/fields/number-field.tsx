import type { InputNumberProps } from '@uvodohq/planum'
import { InputNumber, mergeProps } from '@uvodohq/planum'
import type { UseControllerProps } from 'react-hook-form'
import { useController, useFormContext } from 'react-hook-form'

interface NumberFieldProps extends InputNumberProps, UseControllerProps<any> {
  name: string
  defaultValue?: number
}

// const formatter = new Intl.NumberFormat('en-US', {
//   // style: 'currency',
//   currency: 'USD',
//   maximumFractionDigits: 2,
//   minimumFractionDigits: 2,
// })

export function NumberField(props: NumberFieldProps) {
  const { name, rules, defaultValue, control, ...rest } = props

  const context = useFormContext()

  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control: control ?? context?.control,
    rules,
    defaultValue,
  })

  return (
    <InputNumber
      // format={formatter.format}
      {...mergeProps(field, rest)}
      errorMessage={error?.message}
      status={error?.message ? 'error' : undefined}
    />
  )
}
