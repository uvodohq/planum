import { render, screen } from '../../test'
import { Badge } from '../badge'
import type { BadgeVariant } from '../badge.type'

// TODO: fix types, variants are not defined
const badgeVariants: BadgeVariant[] = [
  'secondary',
  'warning',
  'neutral',
  'success',
  'danger',
  'outlinePrimary',
]

describe('<Badge />', () => {
  test.each(badgeVariants)(
    'should renders %s variant badge with right text',
    (variant) => {
      const badgeText = variant as string

      const { container } = render(<Badge variant={variant}>{badgeText}</Badge>)
      const label = screen.getByText(badgeText)

      expect(label).toBeInTheDocument()
      expect(container).toMatchSnapshot()
    },
  )
})
