import type { SelectProps } from '..'
import Select from '../select'
import { countryList } from './select-options'

interface Country {
  id: number
  name: string
}

export default function SelectExampleControlled(
  props?: Partial<SelectProps<Country>>,
) {
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
