import { Box, Input } from '@uvodohq/planum'
import { useState } from 'react'
import { MagnifyingGlassIcon } from '../../icons'
import type { Icon } from '@uvodohq/planum-icons'
//NOTE: fix typescript error
import { icons } from '../../__stories__/icons.ts'
import { IconGrid, SearchContainer, IconContainer } from './search-icons.styles'

export const SearchIcons = () => {
  const [searchList, setSearchList] = useState<Icon[]>(icons)

  function onSearch(value: string) {
    let filteredList = []

    filteredList = icons.filter((item: Icon) => {
      return item.name.toLowerCase().includes(value.toLowerCase())
    })

    setSearchList(filteredList)
  }

  return (
    <Box css={{ width: '100%' }}>
      <SearchContainer>
        <Input
          onChange={onSearch}
          placeholder="Search icon"
          suffix={<MagnifyingGlassIcon />}
        />
      </SearchContainer>
      <IconGrid>
        {searchList.map(({ name, Icon }) => (
          <IconContainer>
            <Box>
              <Icon />
            </Box>
            <Box>{name}</Box>
          </IconContainer>
        ))}
      </IconGrid>
    </Box>
  )
}
