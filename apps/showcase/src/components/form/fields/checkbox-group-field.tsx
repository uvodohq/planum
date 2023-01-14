import type { CheckboxGroupProps } from '@uvodohq/planum'
import { CheckboxGroup } from '@uvodohq/planum'
// import { CheckboxGroup } from '@uvodohq/planum'
import type { UseControllerProps } from 'react-hook-form'
import { useController, useFormContext } from 'react-hook-form'

interface CheckboxGroupFieldProps
  extends CheckboxGroupProps,
    UseControllerProps<any> {
  name: string
  defaultValue?: any[]
}

export function CheckboxGroupField(props: CheckboxGroupFieldProps) {
  const { name, rules, defaultValue = [], control } = props

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
  // const { onChange, onBlur, name,  ref } = field

  return (
    <CheckboxGroup
      {...props}
      {...field}
      ref={(elm) => {
        // TODO: not forwarding ref, temporary disabled elm.focus()
        // field.ref(elm)
      }}
      // errorMessage={error?.message}
      // status={error?.message && 'error'}
    />
  )
}
