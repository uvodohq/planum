import type { SelectProps } from '../select'
import { Select } from '../select'
import { statusList } from './phone-options'

export default function SelectExampleMinimal(
  props?: Partial<
    SelectProps<{
      name: string
      id: number
    }>
  >,
) {
  return (
    <Select
      items={statusList}
      placeholder="Select a status"
      labelKey="name"
      aria-label="label"
      {...props}
    />
  )
}
