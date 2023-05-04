import type { InputUrlProps } from '@uvodohq/planum'
import { InputUrl } from '@uvodohq/planum'
import type { UseControllerProps } from 'react-hook-form'
import { useController, useFormContext } from 'react-hook-form'

interface UrlFieldProp extends InputUrlProps, UseControllerProps<any> {
  name: string
  defaultValue?: string
}

export function UrlField(props: UrlFieldProp) {
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

  // const { onChange, onBlur, name, value, ref } = field

  return (
    <InputUrl
      {...rest}
      {...field}
      errorMessage={error?.message}
      status={error?.message ? 'error' : undefined}
    />
  )
}
