import { useState } from 'react'

import * as icons from '../..'

interface Item {
  name: string
  Icon: any
}

const iconList: Item[] = Object.keys(icons).map((key) => {
  const list = icons as any
  const Icon = list[key]

  return {
    name: Icon.displayName,
    Icon,
  }
})

function InputSearch(props: any) {
  return (
    <input
      placeholder="Search icon"
      onChange={(e) => props.onChange(e.target.value)}
    />
  )
}

export const SearchIcons = () => {
  const [searchList, setSearchList] = useState<Item[]>(iconList)

  function onSearch(value: string) {
    let filteredList = []

    filteredList = iconList.filter((item: Item) => {
      return item.name.toLowerCase().includes(value.toLowerCase())
    })

    setSearchList(filteredList)
  }

  return (
    <div style={{ width: '100%' }}>
      <div
        style={{
          maxWidth: '400px',
          margin: '20px auto 50px',
        }}>
        <InputSearch onChange={onSearch} />
      </div>
      <div
        style={{
          width: '100%',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: 48,
          padding: '0 32px',
        }}>
        {searchList.map(({ name, Icon }) => (
          <div
            key={name}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
            }}>
            <div>
              <Icon />
            </div>
            <div>{name}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
