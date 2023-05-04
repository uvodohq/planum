import { forwardRef } from 'react'

import type { IconProps, IconWeightComponent } from '../icon'
import { Icon } from '../icon'

const Regular: IconWeightComponent = ({ color }) => (
  <>
    <polyline
      points="176.2 99.7 224.2 99.7 224.2 51.7"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M65.8,65.8a87.9,87.9,0,0,1,124.4,0l34,33.9"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="79.8 156.3 31.8 156.3 31.8 204.3"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M190.2,190.2a87.9,87.9,0,0,1-124.4,0l-34-33.9"
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

const ArrowsClockwiseIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <Icon ref={ref} alt="Arrows Clockwise Icon" {...props} weights={weights} />
  ),
)

ArrowsClockwiseIcon.displayName = 'ArrowsClockwiseIcon'

export default ArrowsClockwiseIcon
