import { forwardRef } from 'react'

import type { IconProps, IconWeightComponent } from '../icon'
import { Icon } from '../icon'

const Duotone: IconWeightComponent = ({ color }) => (
  <>
    <path d="M56,224V40a8,8,0,0,1,8-8H192a8,8,0,0,1,8,8V224Z" opacity="0.2" />
    <line
      x1="24"
      y1="224"
      x2="232"
      y2="224"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M56,224V40a8,8,0,0,1,8-8H192a8,8,0,0,1,8,8V224"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle cx="156" cy="128" r="12" />
  </>
)

const Regular: IconWeightComponent = ({ color }) => (
  <>
    <line
      x1="24"
      y1="224"
      x2="232"
      y2="224"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M56,224V40a8,8,0,0,1,8-8H192a8,8,0,0,1,8,8V224"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle cx="156" cy="128" r="12" />
  </>
)

const weights = {
  duotone: Duotone,
  regular: Regular,
}

const DoorIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} alt="Door Icon" {...props} weights={weights} />
))

DoorIcon.displayName = 'DoorIcon'

export default DoorIcon
