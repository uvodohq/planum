import { mergeProps } from '@uvodohq/planum'
import type { EditorProps } from '@uvodohq/planum-editor'
import { Editor } from '@uvodohq/planum-editor'
import type { UseControllerProps } from 'react-hook-form'
import { useController, useFormContext } from 'react-hook-form'

interface EditorFieldProps extends EditorProps, UseControllerProps<any> {
  name: string
  defaultValue?: string
}

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

  const editorProps = mergeProps(field, rest)

  return (
    <Editor
      {...editorProps}
      errorMessage={error?.message}
      defaultValue={context.control._defaultValues[name]}
      status={error?.message ? 'error' : undefined}
    />
  )
}
