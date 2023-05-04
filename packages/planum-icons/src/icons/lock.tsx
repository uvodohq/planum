import { forwardRef } from 'react'

import type { IconProps, IconWeightComponent } from '../icon'
import { Icon } from '../icon'

const Regular: IconWeightComponent = ({ color }) => (
  <>
    <rect
      x="40"
      y="88"
      width="176"
      height="128"
      rx="8"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M92,88V52a36,36,0,0,1,72,0V88"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle cx="128" cy="152" r="12" />
  </>
)

const weights = {
  // duotone: Duotone,
  regular: Regular,
}

const LockIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} alt="Lock icon" {...props} weights={weights} />
))

LockIcon.displayName = 'LockIcon'

export default LockIcon
