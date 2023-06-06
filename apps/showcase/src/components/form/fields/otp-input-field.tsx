import { mergeProps } from '@uvodohq/planum'
import { OTPInput, OTPInputProps } from '@uvodohq/planum/src'
import type { UseControllerProps } from 'react-hook-form'
import { useController, useFormContext } from 'react-hook-form'

interface Props extends OTPInputProps, UseControllerProps<any> {
  name: string
  defaultValue?: string
}

export function OTPInputField(props: Props) {
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
    <OTPInput
      {...mergeProps(field, rest)}
      // errorMessage={error?.message}
      // status={error?.message ? 'error' : undefined}
    />
  )
}
