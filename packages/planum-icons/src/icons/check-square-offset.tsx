import { forwardRef } from 'react'

import type { IconProps, IconWeightComponent } from '../icon'
import { Icon } from '../icon'

const Regular: IconWeightComponent = ({ color }) => (
  <>
    <path
      d="M44,143.3V52a8,8,0,0,1,8-8H204a8,8,0,0,1,8,8V204a8,8,0,0,1-8,8H135.6"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="128 152 64 216 32 184"
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

const CheckSquareOffsetIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <Icon
      ref={ref}
      alt="Check Square Offset Icon"
      {...props}
      weights={weights}
    />
  ),
)

CheckSquareOffsetIcon.displayName = 'CheckSquareOffsetIcon'

export default CheckSquareOffsetIcon
