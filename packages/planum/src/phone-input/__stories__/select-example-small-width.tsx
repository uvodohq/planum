import type { SelectProps } from '../select'
import { Select } from '../select'
import { weightUnits } from './phone-options'

export default function SelectExampleSmallWidth(
  props?: Partial<
    SelectProps<{
      name: string
      id: number
    }>
  >,
) {
  return (
    <Select
      items={weightUnits}
      placeholder="kg"
      labelKey="name"
      label="&nbsp;"
      aria-label="label"
      {...props}
    />
  )
}
