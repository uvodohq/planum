import type { CSS } from '@uvodohq/planum'
import { Input, Spacer } from '@uvodohq/planum'

import { SearchIcon } from '../icons'
import { usePhoneContext } from '../phone-context'

interface Props {
  css?: CSS
}

export const PopupSearchInput = ({ css }: Props) => {
  const { phone, state } = usePhoneContext()

  const {
    searchInputInteractions,
    onSearchInputChange,
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
        onChange={onSearchInputChange}
        containerCss={css}
        {...searchInputInteractions.getReferenceProps({
          onKeyDown: handleKeyDownOnInput,
        })}
      />
      <Spacer y={8} />
    </>
  )
}
