import { render, screen } from '../../test'
import Badge from '../badge'
import type { BadgeVariantTypes } from '../badge.styles'

// TODO: fix types, variants are not defined
const badgeVariants: BadgeVariantTypes[] = [
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

      render(<Badge variant={variant}>{badgeText}</Badge>)
      const label = screen.getByText(badgeText)

      expect(label).toBeInTheDocument()
    },
  )
})
