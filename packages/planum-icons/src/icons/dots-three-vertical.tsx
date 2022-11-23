import { forwardRef } from 'react'

import type { IconProps, IconWeightComponent } from '../icon'
import { Icon } from '../icon'

const Regular: IconWeightComponent = ({ color }) => (
  <>
    <circle cx="128" cy="128" r="12" />
    <circle cx="128" cy="64" r="12" />
    <circle cx="128" cy="192" r="12" />
  </>
)

const weights = {
  // duotone: Duotone,
  regular: Regular,
}

const DotsThreeVerticalIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <Icon
      ref={ref}
      alt="Dots Three Vertical Icon"
      {...props}
      weights={weights}
    />
  ),
)

DotsThreeVerticalIcon.displayName = 'DotsThreeVerticalIcon'

export default DotsThreeVerticalIcon
