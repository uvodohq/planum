import { InputPassword, mergeProps } from '@uvodohq/planum'
import type { InputPasswordProps } from '@uvodohq/planum/src'
import type { UseControllerProps } from 'react-hook-form'
import { useController, useFormContext } from 'react-hook-form'

interface PasswordFieldProps
  extends InputPasswordProps,
    UseControllerProps<any> {
  name: string
  defaultValue?: string
  label?: string
  placeholder?: string
  description?: string
  onChange?: (value: string) => void
  autoComplete?: string
}

// TODO: passwordfield not autofocus, label, onChange type issue
export function PasswordField(props: PasswordFieldProps) {
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
    <InputPassword
      {...mergeProps(field, rest)}
      errorMessage={error?.message}
      status={error?.message ? 'error' : undefined}
    />
  )
}
