import type { CheckboxProps } from '@uvodohq/planum'
import { Checkbox, mergeProps } from '@uvodohq/planum'
import type { UseControllerProps } from 'react-hook-form'
import { useController, useFormContext } from 'react-hook-form'

interface CheckboxFieldProps extends CheckboxProps, UseControllerProps<any> {
  name: string
}

export function CheckboxField(props: CheckboxFieldProps) {
  const { name, control, rules, defaultValue = false, ...rest } = props

  const context = useFormContext()

  const {
    field,
    // fieldState: { error },
  } = useController({
    name,
    control: control ?? context?.control,
    rules,
    defaultValue,
  })
  // const { onChange, onBlur, name, value, ref } = field

  return (
    <Checkbox
      {...mergeProps(field, rest)}
      isSelected={field.value}
      // errorMessage={error?.message}
      // status={error?.message && 'error'}
    />
  )
}
