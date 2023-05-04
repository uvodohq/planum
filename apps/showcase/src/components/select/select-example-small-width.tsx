import type { SelectProps } from '@uvodohq/planum'
import { Select } from '@uvodohq/planum'
import { weightUnits } from './select-options'

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
