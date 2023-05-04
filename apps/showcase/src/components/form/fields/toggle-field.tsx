import { ToggleProps, Toggle } from '@uvodohq/planum'
import { mergeProps } from '@uvodohq/planum'
import type { UseControllerProps } from 'react-hook-form'
import { useController, useFormContext } from 'react-hook-form'

interface ToggleFieldProps extends ToggleProps, UseControllerProps<any> {
  name: string
}

export function ToggleField(props: ToggleFieldProps) {
  const { name, control, rules, defaultValue = false, ...rest } = props

  const context = useFormContext()

  const { field } = useController({
    name,
    control: control ?? context?.control,
    rules,
    defaultValue,
  })

  return <Toggle {...mergeProps(field, rest)} isSelected={field.value} />
}
