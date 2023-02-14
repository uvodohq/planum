import { styled } from '../theme'
import { useSelectContext } from './context'
import type { SelectEmptyContentProps } from './select.types'

const StyledEmpty = styled('span', {
  py: 16,
  dflex: 'center',
})

type Props = SelectEmptyContentProps & React.HTMLAttributes<HTMLSpanElement>

export const SelectEmptyContent = (props: Props) => {
  const { renderEmpty, emptyTitle = 'No result found', ...rest } = props
  const { select } = useSelectContext()
  const { noResultsId } = select

  const emptyProps = {
    role: 'region',
    'aria-atomic': true,
    'aria-live': 'assertive' as any,
    id: noResultsId,
    ...rest,
  }

  if (typeof renderEmpty === 'function') {
    return renderEmpty(emptyProps)
  }

  return <StyledEmpty {...emptyProps}>{emptyTitle}</StyledEmpty>
}
