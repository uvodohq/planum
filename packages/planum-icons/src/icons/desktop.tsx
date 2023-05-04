import { forwardRef } from 'react'

import type { IconProps, IconWeightComponent } from '../icon'
import { Icon } from '../icon'

const Regular: IconWeightComponent = ({ color }) => (
  <>
    <rect
      x="32"
      y="48"
      width="192"
      height="144"
      rx="16"
      transform="translate(256 240) rotate(180)"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="160"
      y1="224"
      x2="96"
      y2="224"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="32"
      y1="152"
      x2="224"
      y2="152"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="128"
      y1="192"
      x2="128"
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

const DesktopIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} alt="Desktop icon" {...props} weights={weights} />
))

DesktopIcon.displayName = 'DesktopIcon'

export default DesktopIcon
