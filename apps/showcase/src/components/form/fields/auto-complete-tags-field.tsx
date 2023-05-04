import type { AutoCompleteTagsProps } from '@uvodohq/planum'
import { AutoCompleteTags, mergeProps } from '@uvodohq/planum'
import type { UseControllerProps } from 'react-hook-form'
import { useController, useFormContext } from 'react-hook-form'

type AutoCompleteTagsFieldProps = AutoCompleteTagsProps<any> &
  UseControllerProps<any, any>

export function AutoCompleteTagsField(props: AutoCompleteTagsFieldProps) {
  const { name, rules, defaultValue, control } = props
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
    <AutoCompleteTags
      {...mergeProps(field, props)}
      errorMessage={error?.message}
      status={error?.message ? 'error' : undefined}
    />
  )
}
