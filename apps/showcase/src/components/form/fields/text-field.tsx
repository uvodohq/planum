import type { InputProps } from '@uvodohq/planum'
import { Input, mergeProps } from '@uvodohq/planum'
import type { UseControllerProps } from 'react-hook-form'
import { useController, useFormContext } from 'react-hook-form'

interface TextFieldProps extends InputProps, UseControllerProps<any> {
  name: string
  defaultValue?: string
}

export function TextField(props: TextFieldProps) {
  const {
    name,
    control,
    rules,
    defaultValue = '',
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
    <Input
      {...mergeProps(field, rest)}
      errorMessage={error?.message}
      status={error?.message ? 'error' : undefined}
    />
  )
}
