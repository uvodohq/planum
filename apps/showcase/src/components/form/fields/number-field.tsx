import type { InputNumberProps } from '@uvodohq/planum'
import { InputNumber, mergeProps } from '@uvodohq/planum'
import type { UseControllerProps } from 'react-hook-form'
import { useController, useFormContext } from 'react-hook-form'

import { DEFAULT_NUMBER } from '../schemas'

interface NumberFieldProps extends InputNumberProps, UseControllerProps<any> {
  name: string
  defaultValue?: number
}

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

  function fieldOnChange(value: any) {
    /**
     * Planum NumberInput - sets value to NaN if input is empty.
     * Needs to use string as default value to avoid NaN. HookForm cannot handle isDirty with NaN.
     */
    if (Number.isNaN(value)) {
      field.onChange(DEFAULT_NUMBER)
    } else {
      field.onChange(value)
    }
  }

  return (
    <InputNumber
      {...mergeProps(field, rest, {
        onChange: fieldOnChange,
      })}
      errorMessage={error?.message}
      status={error?.message ? 'error' : undefined}
    />
  )
}
