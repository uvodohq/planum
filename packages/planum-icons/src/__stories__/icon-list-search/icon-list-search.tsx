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

const duotoneList = [
  'ChartBarIcon',
  'CirclesFourIcon',
  'ClipboardTextIcon',
  'DoorIcon',
  'GearIcon',
  'HouseIcon',
  'PaintBrushBroadIcon',
  'PuzzlePieceIcon',
  'StorefrontIcon',
  'UserIcon',
]

export const allIconsCount = iconList.length
export const duotoneIconsCount = duotoneList.length

export function DuotoneIcons() {
  return (
    <div
      style={{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: 48,
        padding: '0 32px',
      }}>
      {duotoneList.map((name) => {
        // @ts-expect-error icon
        const Icon = icons[name]

        return (
          <div
            key={name}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
            }}>
            <div>
              <Icon weight="duotone" />
            </div>
            <div>{name}</div>
          </div>
        )
      })}
    </div>
  )
}

function InputSearch(props: any) {
  return (
    <input
      placeholder="Search icon"
      onChange={(e) => props.onChange(e.target.value)}
      style={{
        height: 48,
        padding: 12,
        width: '100%',
        borderRadius: 4,
        border: '1px solid',
      }}
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
      <h2>There are {allIconsCount} icons in planum icons</h2>
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
