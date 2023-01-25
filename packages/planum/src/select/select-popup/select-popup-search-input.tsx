import { Input } from '../../input'
import { Spacer } from '../../layout'
import { SearchIcon } from '../icons'
import type { UseSelectReturn } from '../use-select'

interface Props {
  select: UseSelectReturn
}

export const PopupSearchInput = (props: Props) => {
  const { select } = props

  const {
    search,
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
        value={search}
        aria-controls={isEmpty ? noResultsId : listboxId}
        aria-expanded="true"
        aria-autocomplete="list"
        aria-label="search"
        {...inputInteractions.getReferenceProps({
          onChange: handleInputChange,
          onKeyDown: handleKeyDownInput,
        })}
      />
      <Spacer y={8} />
    </>
  )
}
