import { forwardRef } from 'react'

import type { IconProps, IconWeightComponent } from '../icon'
import { Icon } from '../icon'

const Regular: IconWeightComponent = ({ color }) => (
  <>
    <circle
      cx="116"
      cy="116"
      r="84"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="175.4"
      y1="175.4"
      x2="224"
      y2="224"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
  </>
)

const weights = {
  // duotone: Duotone,
  regular: Regular,
}

const MagnifyingGlassIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <Icon ref={ref} alt="Magnifying Glass Icon" {...props} weights={weights} />
  ),
)

MagnifyingGlassIcon.displayName = 'MagnifyingGlassIcon'

export default MagnifyingGlassIcon
