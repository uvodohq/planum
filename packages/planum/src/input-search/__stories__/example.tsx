import { useState } from 'react'
import { InputSearch } from 'src'

export const InputSearchExample = () => {
  const [value, setValue] = useState('')
  const [state, setState] = useState<any>()

  return (
    <InputSearch
      label="Label"
      description="Description goes here"
      placeholder="search"
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
