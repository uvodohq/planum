import { useState } from 'react'

import { InputUrl } from '..'

export const InputUrlExample = () => {
  const [value, setValue] = useState('')
  const [state, setState] = useState<any>()

  return (
    <InputUrl
      prefix="/products/"
      label="Label"
      description="Description goes here"
      successMessage="Success message"
      errorMessage="Error message"
      placeholder="slug"
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
