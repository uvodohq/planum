import { useState } from 'react'

import { CheckboxGroup } from '../checkbox-group'
import { CheckboxGroupItem } from '../checkbox-group-item'

const list = [
  {
    label: 'Dog',
    value: 'dog',
  },
  {
    label: 'Panda',
    value: 'panda',
  },
  {
    label: 'Cat',
    value: 'cat',
    isDisabled: true,
  },
  {
    label: 'Snake',
    value: 'snake',
    isDisabled: true,
  },
]

export const CheckboxGroupExample = () => {
  const [value, setValue] = useState<string[]>(['snake'])

  return (
    <div>
      <CheckboxGroup
        value={value}
        onChange={setValue}
        css={{
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
        }}>
        {list.map((item) => (
          <CheckboxGroupItem key={item.label} {...item} />
        ))}
      </CheckboxGroup>

      <div>{JSON.stringify(value, null, 2)}</div>
    </div>
  )
}
