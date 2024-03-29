import { mergeProps } from '@uvodohq/planum'
import { PhoneInput, PhoneProps } from '@uvodohq/planum-phone'

import type { UseControllerProps } from 'react-hook-form'
import { useController, useFormContext } from 'react-hook-form'

interface PhoneInputFieldProps extends PhoneProps, UseControllerProps<any> {
  name: string
  defaultValue?: string
  label?: string
  placeholder?: string
}

export function PhoneInputField(props: PhoneInputFieldProps) {
  const { name, rules, defaultValue = '', control, ...rest } = props

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
    <PhoneInput
      {...mergeProps(field, rest)}
      errorMessage={error?.message}
      status={error?.message ? 'error' : undefined}
    />
  )
}
