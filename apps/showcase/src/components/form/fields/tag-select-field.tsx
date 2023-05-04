import type { TagSelectProps } from '@uvodohq/planum'
import { TagSelect } from '@uvodohq/planum'
import type { UseControllerProps } from 'react-hook-form'
import { useController, useFormContext } from 'react-hook-form'

type TagSelectFieldProps = TagSelectProps & UseControllerProps<any, any>

export function TagSelectField(props: TagSelectFieldProps) {
  const { name, rules, defaultValue, control } = props
  const context = useFormContext()

  const { field } = useController({
    name,
    control: control ?? context?.control,
    rules,
    defaultValue,
  })

  return <TagSelect {...props} {...field} />
}
