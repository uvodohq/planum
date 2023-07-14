import { Input } from '../../input'
import { Spacer } from '../../layout'
import type { CSS } from '../../theme'
import { SearchIcon } from '../icons'
import { useSelectContext } from '../select-context'

interface Props {
  css?: CSS
}

export const PopupSearchInput = ({ css }: Props) => {
  const { select, state } = useSelectContext()

  const {
    inputInteractions,
    handleInputChange,
    handleKeyDownOnInput,
    isEmpty,
    noResultsId,
    listboxId,
  } = select

  return (
    <>
      <Input
        placeholder="Search"
        role="combobox"
        leftIcon={<SearchIcon />}
        value={state.search}
        aria-controls={isEmpty ? noResultsId : listboxId}
        aria-expanded="true"
        aria-autocomplete="list"
        aria-label="search"
        onChange={(value) => {
          handleInputChange(value)
          if (state.searchable) {
            state.onSearch?.(value)
          }
        }}
        containerCss={css}
        {...inputInteractions.getReferenceProps({
          onKeyDown: handleKeyDownOnInput,
        })}
      />
      <Spacer y={8} />
    </>
  )
}
