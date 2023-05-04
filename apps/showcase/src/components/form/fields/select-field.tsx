import type { SelectProps } from '@uvodohq/planum'
import { mergeProps, Select } from '@uvodohq/planum'
import type { UseControllerProps } from 'react-hook-form'
import { useController, useFormContext } from 'react-hook-form'

// TODO: get select item types
interface SelectFieldProps extends SelectProps, UseControllerProps<any> {
  name: string
  defaultValue?: string
}

export function SelectField(props: SelectFieldProps) {
  const {
    name,
    rules,
    defaultValue,

    ...rest
  } = props

  const { control } = useFormContext()

  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
    rules,
    defaultValue,
  })

  return (
    <Select
      {...mergeProps(field, rest)}
      errorMessage={error?.message}
      status={error?.message ? 'error' : undefined}
    />
  )
}
