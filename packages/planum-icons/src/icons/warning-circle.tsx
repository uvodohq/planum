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
      strokeWidth="18"
    />
    <line
      x1="128"
      y1="80"
      x2="128"
      y2="136"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="18"
    />
    <circle cx="128" cy="172" r="12" />
  </>
)

const weights = {
  // duotone: Duotone,
  regular: Regular,
}

const WarningCircleIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} alt="Warning Circle  Icon" {...props} weights={weights} />
))

WarningCircleIcon.displayName = 'WarningCircleIcon'

export default WarningCircleIcon
