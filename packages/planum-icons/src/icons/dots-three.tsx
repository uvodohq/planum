import { forwardRef } from 'react'

import type { IconProps, IconWeightComponent } from '../icon'
import { Icon } from '../icon'

const Regular: IconWeightComponent = ({ color }) => (
  <>
    <circle cx="128" cy="128" r="12" />
    <circle cx="192" cy="128" r="12" />
    <circle cx="64" cy="128" r="12" />
  </>
)

const weights = {
  // duotone: Duotone,
  regular: Regular,
}

const DotsThreeIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} alt="Three Dots Icon" {...props} weights={weights} />
))

DotsThreeIcon.displayName = 'DotsThreeIcon'

export default DotsThreeIcon
