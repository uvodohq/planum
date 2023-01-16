import { sharedInputCss } from '../input'
import { Spacer } from '../layout'
import { styled } from '../theme'
import type { UseSelectReturn } from './use-select'

const StyledInput = styled('input', sharedInputCss, {
  height: '$40',
  borderRadius: '$sm',
  padding: '$4 $8',
  width: 'calc(100% - 4px)',
  outline: 'none',

  '&:focus': {
    borderColor: '$primary600',
    boxShadow: '0 0 0 3px $colors$primary100',
    '&:hover': {
      borderColor: '$primary600',
    },
  },
})

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
      <StyledInput
        type="text"
        placeholder="Search"
        role="combobox"
        value={search}
        aria-controls={isEmpty ? noResultsId : listboxId}
        aria-expanded="true"
        aria-autocomplete="list"
        {...inputInteractions.getReferenceProps({
          onChange: handleInputChange,
          onKeyDown: handleKeyDownInput,
        })}
      />
      <Spacer y={8} />
    </>
  )
}
