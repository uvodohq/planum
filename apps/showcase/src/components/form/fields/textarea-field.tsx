import { mergeProps, Textarea } from '@uvodohq/planum'
import { useController, useFormContext } from 'react-hook-form'

export function TextareaField(props: any) {
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
    <Textarea
      {...mergeProps(field, rest)}
      errorMessage={error?.message}
      status={error?.message ? 'error' : undefined}
    />
  )
}
