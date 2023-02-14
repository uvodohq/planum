import { Input } from '../../input'
import { Spacer } from '../../layout'
import { useSelectContext } from '../context'
import { SearchIcon } from '../icons'

export const PopupSearchInput = () => {
  const { select, state } = useSelectContext()
  const { handleInputChange, isEmpty, search } = state
  const { noResultsId, listboxId } = select

  return (
    <>
      <Input
        placeholder="Search"
        role="combobox"
        leftIcon={<SearchIcon />}
        value={search}
        aria-controls={isEmpty ? noResultsId : listboxId}
        aria-expanded="true"
        aria-autocomplete="list"
        aria-label="search"
        onChange={handleInputChange}
      />
      <Spacer y={8} />
    </>
  )
}
