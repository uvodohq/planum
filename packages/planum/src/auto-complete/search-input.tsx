import { mergeProps } from '@react-aria/utils'
import { useContext } from 'react'

import type { InputProps } from '../input'
import Input from '../input'
import { SearchIcon } from '../input-search/search-icon'
import { AutoCompleteContext } from './context'

export interface SearchInputProps extends InputProps {}

export default function SearchInput(props: SearchInputProps) {
  const context = useContext(AutoCompleteContext)
  const { state, autoComplete, items, labelKey, onSelect } = context
  const { inputValue, activeIndex, setInputValue, setActiveIndex, isOpen } =
    state

  function onChangeInputValue(value: string) {
    setInputValue(value)

    if (value) {
      !isOpen && state.open()
      setActiveIndex(0)
    } else {
      state.close()
    }
  }

  const referenceProps = autoComplete.getReferenceProps({
    value: inputValue,
    'aria-autocomplete': 'list',
    onKeyDown(event) {
      const selected = items[activeIndex]

      if (event.key === 'Enter' && activeIndex != null && selected) {
        // prevent form submit when enter is pressed
        event.stopPropagation()
        event.preventDefault()

        setInputValue('')
        setActiveIndex(null)
        state.close()
        onSelect(selected)
        return
      }

      if (event.key === 'Tab') {
        state.close()
      }
    },
  })

  return (
    <Input
      aria-label="search"
      leftIcon={<SearchIcon />}
      inputContainerRef={autoComplete.reference}
      onChange={onChangeInputValue}
      {...mergeProps(props, referenceProps)}
    />
  )
}
