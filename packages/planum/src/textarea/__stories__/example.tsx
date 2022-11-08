import { useState } from 'react'

import Textarea from '../textarea'

export const TextareaExample = () => {
  const [value, setValue] = useState('')
  const [state, setState] = useState<any>()

  return (
    <Textarea
      label="Textarea Example"
      description="This is a textarea real example"
      successMessage="Success message, You did it!"
      errorMessage="Error message, at least 5 characters needed"
      placeholder="Try to write to check states"
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
