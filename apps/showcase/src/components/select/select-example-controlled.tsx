import { useState } from 'react'

import type { SelectProps } from '@uvodohq/planum'
import { Select } from '@uvodohq/planum'
import { countryList } from './select-options'

interface Country {
  id: number
  name: string
}

export default function SelectExampleControlled(
  props?: Partial<SelectProps<Country>>,
) {
  const [value, setValue] = useState<any>(null)

  function onChange(value: any) {
    console.log('onChange', value)
    setValue(value)
  }

  return (
    <Select
      value={value}
      onChange={onChange}
      items={countryList}
      labelKey="name"
      placeholder="Select a country"
      aria-label="label"
      {...props}
    />
  )
}
