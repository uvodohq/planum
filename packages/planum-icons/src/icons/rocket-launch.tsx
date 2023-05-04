import { forwardRef } from 'react'

import type { IconProps, IconWeightComponent } from '../icon'
import { Icon } from '../icon'

const Regular: IconWeightComponent = ({ color }) => (
  <>
    <path
      d="M94.1,184.6c-11.4,33.9-56.6,33.9-56.6,33.9s0-45.2,33.9-56.6"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M195.9,105.4,128,173.3,82.7,128l67.9-67.9C176.3,34.4,202,34.7,213,36.3a7.8,7.8,0,0,1,6.7,6.7C221.3,54,221.6,79.7,195.9,105.4Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M184.6,116.7v64.6a8,8,0,0,1-2.4,5.6l-32.3,32.4a8,8,0,0,1-13.5-4.1L128,173.3"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M139.3,71.4H74.7a8,8,0,0,0-5.6,2.4L36.7,106.1a8,8,0,0,0,4.1,13.5L82.7,128"
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

const RocketLaunchIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} alt="Rocket Launch Icon" {...props} weights={weights} />
))

RocketLaunchIcon.displayName = 'RocketLaunchIcon'

export default RocketLaunchIcon
