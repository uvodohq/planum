import type { InputProps } from '@uvodohq/planum'
import { mergeProps } from '@uvodohq/planum'
import { InputMask } from '@uvodohq/planum/src'
import type { UseControllerProps } from 'react-hook-form'
import { useController, useFormContext } from 'react-hook-form'

interface MaskFieldProps extends InputProps, UseControllerProps<any> {
  name: string
  defaultValue?: string
  format: any
}

export function MaskField(props: MaskFieldProps) {
  const {
    name,
    control,
    rules,
    defaultValue = '',
    format,
    // shouldDirty = true,
    ...rest
  } = props

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

  // exclude field to affect form dirty state onChange
  // field.onChange = function onChange(value) {
  //   context.setValue(name, value, { shouldDirty })
  // }

  return (
    <InputMask
      format={format}
      {...mergeProps(field, rest)}
      errorMessage={error?.message}
      status={error?.message ? 'error' : undefined}
    />
  )
}
