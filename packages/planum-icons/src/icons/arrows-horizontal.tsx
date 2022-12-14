import { forwardRef } from 'react'

import type { IconProps, IconWeightComponent } from '../icon'
import { Icon } from '../icon'

const Regular: IconWeightComponent = ({ color }) => (
  <>
    <polyline
      points="56 96 24 128 56 160"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="200 96 232 128 200 160"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="24"
      y1="128"
      x2="232"
      y2="128"
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

const ArrowsHorizontalIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <Icon ref={ref} alt="ArrowsHorizontalIcon" {...props} weights={weights} />
  ),
)

ArrowsHorizontalIcon.displayName = 'ArrowsHorizontalIcon'

export default ArrowsHorizontalIcon
