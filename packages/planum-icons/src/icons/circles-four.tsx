import { forwardRef } from 'react'

import type { IconProps, IconWeightComponent } from '../icon'
import { Icon } from '../icon'

const Duotone: IconWeightComponent = ({ color }) => (
  <>
    <circle cx="76" cy="180" r="36" opacity="0.2" />
    <circle cx="76" cy="76" r="36" opacity="0.2" />
    <circle cx="180" cy="76" r="36" opacity="0.2" />
    <circle cx="180" cy="180" r="36" opacity="0.2" />
    <circle
      cx="76"
      cy="76"
      r="36"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle
      cx="180"
      cy="76"
      r="36"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle
      cx="180"
      cy="180"
      r="36"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle
      cx="76"
      cy="180"
      r="36"
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
      cx="76"
      cy="76"
      r="36"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle
      cx="180"
      cy="76"
      r="36"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle
      cx="76"
      cy="180"
      r="36"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle
      cx="180"
      cy="180"
      r="36"
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

const CirclesFourIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} alt="Four Circles Icon" {...props} weights={weights} />
))

CirclesFourIcon.displayName = 'CirclesFourIcon'

export default CirclesFourIcon
