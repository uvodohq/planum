import { forwardRef } from 'react'

import type { IconProps, IconWeightComponent } from '../icon'
import { Icon } from '../icon'

const Duotone: IconWeightComponent = ({ color }) => (
  <>
    <circle cx="128" cy="96" r="64" opacity="0.2" />
    <circle
      cx="128"
      cy="96"
      r="64"
      fill="none"
      stroke={color}
      strokeMiterlimit="10"
      strokeWidth="16"
    />
    <path
      d="M31,216a112,112,0,0,1,194,0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
  </>
)

const Regular: IconWeightComponent = ({ color }) => (
  <>
    <circle
      cx="128"
      cy="96"
      r="64"
      fill="none"
      stroke={color}
      strokeMiterlimit="10"
      strokeWidth="16"
    />
    <path
      d="M31,216a112,112,0,0,1,194,0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
  </>
)

const weights = {
  duotone: Duotone,
  regular: Regular,
}

const UserIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} alt="User Icon" {...props} weights={weights} />
))

UserIcon.displayName = 'UserIcon'

export default UserIcon
