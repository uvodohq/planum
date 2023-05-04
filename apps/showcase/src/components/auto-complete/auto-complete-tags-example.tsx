import { useState } from 'react'

import { Flag, Tag, AutoCompleteTags } from '@uvodohq/planum'
import type { CountryCode } from '@uvodohq/planum'

import { countryList } from './options'

export const AutoCompleteTagsExample = (props: any) => {
  const [value, setValue] = useState(countryList.slice(0, 4))

  const worldWide = {
    name: 'World Wide',
    id: 'ww',
  }

  const options = [worldWide, ...countryList]

  return (
    <AutoCompleteTags
      placeholder="create country tag"
      label="Custom country tags"
      options={options}
      value={value}
      onChange={setValue}
      labelKey="name"
      renderTag={({ tag, onRemove }) => {
        return (
          <Tag
            leftIcon={<Flag country={tag.id as CountryCode} />}
            onRemove={onRemove}>
            {tag.name}
          </Tag>
        )
      }}
      {...props}
    />
  )
}
