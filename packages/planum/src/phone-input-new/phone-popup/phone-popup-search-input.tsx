import { Input } from '../../input'
import { Spacer } from '../../layout'
import { SearchIcon } from '../icons'
import { usePhoneContext } from '../phone-context'

export const PopupSearchInput = () => {
  const { phone, state } = usePhoneContext()

  const {
    inputInteractions,
    handleInputChange,
    handleKeyDownOnInput,
    isEmpty,
    noResultsId,
    listboxId,
  } = phone

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
          onKeyDown: handleKeyDownOnInput,
        })}
      />
      <Spacer y={8} />
    </>
  )
}
