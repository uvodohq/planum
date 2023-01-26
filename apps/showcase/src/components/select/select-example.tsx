import type { SelectProps } from '@uvodohq/planum'
import { Select } from '@uvodohq/planum'
import { countryList } from './select-options'

interface Country {
  id: number
  name: string
}

export default function SelectExampleControlled(props?: Partial<SelectProps>) {
  return (
    <Select
      items={countryList}
      labelKey="name"
      aria-label="label"
      placeholder="Select a country"
      {...props}
    />
  )
}
