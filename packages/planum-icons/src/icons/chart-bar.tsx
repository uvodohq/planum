import { forwardRef } from 'react'

import type { IconProps, IconWeightComponent } from '../icon'
import { Icon } from '../icon'

const Duotone: IconWeightComponent = ({ color }) => (
  <>
    <rect x="156" y="40" width="56" height="168" opacity="0.2" />
    <line
      x1="228"
      y1="208"
      x2="28"
      y2="208"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="100 208 100 88 156 88"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <rect
      x="156"
      y="40"
      width="56"
      height="168"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="44 208 44 136 100 136"
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
    <polyline
      points="44 208 44 136 100 136"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="228"
      y1="208"
      x2="28"
      y2="208"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="100 208 100 88 156 88"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <rect
      x="156"
      y="40"
      width="56"
      height="168"
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

const ChartBarIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} alt="Chart Bar Icon" {...props} weights={weights} />
))

ChartBarIcon.displayName = 'ChartBarIcon'

export default ChartBarIcon
