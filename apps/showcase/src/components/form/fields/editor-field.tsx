import type { EditorProps } from '@uvodohq/planum-editor'
import { Editor } from '@uvodohq/planum-editor'
import type { UseControllerProps } from 'react-hook-form'
import { useController, useFormContext } from 'react-hook-form'

interface EditorFieldProps extends EditorProps, UseControllerProps<any> {}

export function EditorField(props: EditorFieldProps) {
  const { control, name, rules, defaultValue, ...rest } = props

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
    <Editor
      {...rest}
      {...field}
      errorMessage={error?.message}
      status={error?.message ? 'error' : undefined}
    />
  )
}
