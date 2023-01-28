import { styled } from '../theme'
import type { PhoneEmptyContentProps } from './phone.types'
import { usePhoneContext } from './phone-context'

const StyledEmpty = styled('span', {
  py: 16,
  dflex: 'center',
})

type Props = PhoneEmptyContentProps & React.HTMLAttributes<HTMLSpanElement>

export const PhoneEmptyContent = (props: Props) => {
  const { renderEmpty, emptyTitle = 'No result found', ...rest } = props
  const { phone } = usePhoneContext()
  const { noResultsId } = phone

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
