import type { RadioGroupProps } from '@uvodohq/planum'
import { mergeProps, RadioGroup } from '@uvodohq/planum'

import type { UseControllerProps } from 'react-hook-form'
import { useController, useFormContext } from 'react-hook-form'

interface RadioGroupFieldProps
  extends RadioGroupProps,
    UseControllerProps<any> {
  name: string
  defaultValue?: string
  isDirty?: boolean
}

export function RadioGroupField(props: RadioGroupFieldProps) {
  const { name, rules, defaultValue = false, control } = props

  const context = useFormContext()

  const { field } = useController({
    name,
    control: control ?? context?.control,
    rules,
    defaultValue,
  })

  return (
    <RadioGroup
      {...mergeProps(field, props)}
      ref={(elm) => {
        // TODO: not forwarding ref, temporary disabled elm.focus()
        // field.ref(elm)
      }}
    />
  )
}
