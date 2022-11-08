import { useState } from 'react'

import InputNumber from '../input-number'

export const InputNumberExample = () => {
  const [value, setValue] = useState<number>()
  const [state, setState] = useState<any>()

  return (
    <InputNumber
      label="Label"
      description="Description goes here"
      successMessage="Success message"
      errorMessage="Error message"
      placeholder="23.99"
      status={state}
      value={value}
      onChange={(value) => {
        if (value < 5) {
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
