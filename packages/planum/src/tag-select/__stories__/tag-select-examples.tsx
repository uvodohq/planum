import { useState } from 'react'

import Flag from '../flag'
import type { CountryCode } from '../flag/types'
import Tag from '../tag'
import { TagSelect } from '../tag-select'
import data from './data.json'

const items = [
  {
    id: '1',
    label: 'Tag 1',
  },
  {
    id: '2',
    label: 'Tag 2',
  },
]

const countries = data.map((item) => ({
  id: item.alpha2,
}))

export const TagSelectExample = (props: any) => {
  const [value, setValue] = useState(items)

  return (
    <TagSelect
      placeholder="tshirts, black, red"
      label="With default value"
      value={value}
      onChange={setValue}
      labelKey="label"
      {...props}
    />
  )
}
export const TagSelectCountryExample = (props: any) => {
  const [value, setValue] = useState(countries)

  return (
    <TagSelect
      placeholder="create country tag"
      label="Custom country tags"
      value={value}
      onChange={setValue}
      labelKey="id"
      renderTag={({ tag, index, onRemove }) => {
        return (
          <Tag
            leftIcon={<Flag country={tag.id as CountryCode} />}
            onRemove={onRemove}>
            {index + 1}. {tag.id}
          </Tag>
        )
      }}
      {...props}
    />
  )
}
