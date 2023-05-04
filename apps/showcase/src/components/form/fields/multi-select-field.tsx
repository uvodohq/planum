import type { MultiSelectProps } from '@uvodohq/planum'
import { mergeProps, MultiSelect } from '@uvodohq/planum'
import type { UseControllerProps } from 'react-hook-form'
import { useController, useFormContext } from 'react-hook-form'

// TODO: get Multiselect item types
interface MultiSelectFieldProps
  extends MultiSelectProps,
    UseControllerProps<any> {
  name: string
  defaultValue?: any[]
}

export function MultiSelectField(props: MultiSelectFieldProps) {
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
    <MultiSelect
      {...mergeProps(field, rest)}
      errorMessage={error?.message}
      status={error?.message ? 'error' : undefined}
    />
  )
}
