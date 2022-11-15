import { useRef } from 'react'

import { styled } from '../theme'
import { AutoCompleteContext } from './context'
import { Option } from './option'
import Popup from './popup'
import SearchInput from './search-input'
import type { AutoCompleteProps } from './types'
import { useAutoComplete } from './use-auto-complete'
import { useAutoCompleteState } from './use-auto-complete-state'

const StyledEmpty = styled('span', {
  py: 16,
  dflex: 'center',
})

export function AutoComplete<
  T extends {
    [key: string]: any
    id: string | number
  },
>(props: AutoCompleteProps<T>) {
  const {
    defaultValue = '',
    value = defaultValue,
    labelKey,
    onChange,
    options = [],
    onSelect,
    ...rest
  } = props

  const listRef = useRef<Array<HTMLLIElement | null>>([])
  const state = useAutoCompleteState({
    defaultValue,
    value,
    onChange,
  })

  const items = options.filter((item) =>
    item[labelKey as any]
      .toLowerCase()
      .startsWith(state.inputValue.toLowerCase()),
  )

  const autoComplete = useAutoComplete(
    {
      listRef,
    },
    state,
  )

  const renderFilteredItems = () => {
    return items.map((option, index) => {
      const { id } = option
      const label = option[labelKey as any]

      return (
        <Option key={id} index={index}>
          {label}
        </Option>
      )
    })
  }

  const contextValue = {
    state,
    autoComplete,
    listRef,
    items,
    labelKey,
    onSelect,
  }

  return (
    <AutoCompleteContext.Provider value={contextValue}>
      <SearchInput {...rest} />
      <Popup>
        <ul>
          {state.isOpen && renderFilteredItems()}

          {items.length === 0 && <StyledEmpty>No results found</StyledEmpty>}
        </ul>
      </Popup>
    </AutoCompleteContext.Provider>
  )
}
