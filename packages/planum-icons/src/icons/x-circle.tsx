import { forwardRef } from 'react'

import type { IconProps, IconWeightComponent } from '../icon'
import { Icon } from '../icon'

const Regular: IconWeightComponent = ({ color }) => (
  <>
    <circle
      cx="128"
      cy="128"
      r="96"
      fill="none"
      stroke={color}
      strokeMiterlimit="10"
      strokeWidth="16"
    />
    <line
      x1="160"
      y1="96"
      x2="96"
      y2="160"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="160"
      y1="160"
      x2="96"
      y2="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
  </>
)

const weights = {
  regular: Regular,
}

const XCircleIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} alt="X Circle Icon" {...props} weights={weights} />
))

XCircleIcon.displayName = 'XCircleIcon'

export default XCircleIcon
