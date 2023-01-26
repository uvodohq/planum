import { Input } from '../../input'
import { Spacer } from '../../layout'
import { SearchIcon } from '../icons'
import { useSelectContext } from '../select-context'

export const PopupSearchInput = () => {
  const { select, state } = useSelectContext()

  const {
    inputInteractions,
    handleInputChange,
    handleKeyDownInput,
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
        onChange={handleInputChange}
        {...inputInteractions.getReferenceProps({
          onKeyDown: handleKeyDownInput,
        })}
      />
      <Spacer y={8} />
    </>
  )
}
