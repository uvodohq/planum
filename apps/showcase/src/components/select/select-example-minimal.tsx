import type { SelectProps } from '@uvodohq/planum'
import { Select } from '@uvodohq/planum'
import { statusList } from './select-options'

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
