import { useState } from 'react'
import { Box, Button, Flag, Spacer, Tag, TagGroup } from 'src'

import { generateId } from '~/utils/generate-id'

import type { CountryCode } from '../flag/types'
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
  name: item.name,
}))

export function TagGroupExample() {
  const [value, setValue] = useState(items)

  function onSubmit() {
    const name = generateId()
    const newTag = {
      id: name,
      label: name,
    }
    setValue((prev) => [...prev, newTag])
  }

  return (
    <Box
      css={{
        alignItems: 'center',
      }}>
      <Button onClick={onSubmit} variant="secondaryDark" size="sm">
        Add
      </Button>
      <Spacer y={24} />
      <TagGroup
        value={value}
        onChange={(value) => {
          // console.log('onChange', value)
          setValue(value)
        }}
        onTagRemoved={(state) => {
          // console.log('onTagRemoved', state)
        }}
        labelKey="label"
      />
    </Box>
  )
}

export function TagGroupCustomRender() {
  return (
    <TagGroup
      defaultValue={countries}
      labelKey="name"
      renderTag={({ tag, index, onRemove }) => {
        return (
          <Tag
            leftIcon={<Flag country={tag.id as CountryCode} />}
            onRemove={onRemove}>
            {index + 1}. {tag.name}
          </Tag>
        )
      }}
    />
  )
}
