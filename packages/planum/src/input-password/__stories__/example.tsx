import { useState } from 'react'
import { InputPassword } from 'src'

export const InputPasswordExample = () => {
  const [value, setValue] = useState('')
  const [state, setState] = useState<any>()

  return (
    <InputPassword
      label="Input Label"
      description="This is an input example"
      successMessage="Success message, You did it!"
      errorMessage="at least 5 characters needed"
      placeholder="Try to validate status"
      status={state}
      value={value}
      onChange={(value) => {
        if (value.length < 5) {
          setState('error')
        } else {
          setState('success')
        }

        if (!value) setState('normal')

        setValue(value)
      }}
    />
  )
}
