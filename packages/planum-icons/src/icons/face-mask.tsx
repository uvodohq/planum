import { forwardRef } from 'react'

import type { IconProps, IconWeightComponent } from '../icon'
import { Icon } from '../icon'

const Regular: IconWeightComponent = ({ color }) => (
  <>
    <path
      d="M216,136c0,51.5-74.4,69.2-86.4,71.7a8.6,8.6,0,0,1-3.2,0C114.4,205.2,40,187.5,40,136V77.6a7.9,7.9,0,0,1,5.3-7.5l80-29.1a8.3,8.3,0,0,1,5.4,0l80,29.1a7.9,7.9,0,0,1,5.3,7.5Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="88"
      y1="112"
      x2="168"
      y2="112"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="88"
      y1="144"
      x2="168"
      y2="144"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M213.4,152H224a23.9,23.9,0,0,0,24-24V104a23.9,23.9,0,0,0-24-24h-8"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M42.6,152H32A23.9,23.9,0,0,1,8,128V104A23.9,23.9,0,0,1,32,80h8"
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

const FaceMaskIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} alt="Face Mask icon" {...props} weights={weights} />
))

FaceMaskIcon.displayName = 'FaceMaskIcon'

export default FaceMaskIcon
