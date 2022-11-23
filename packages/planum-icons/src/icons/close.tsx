import { forwardRef } from 'react'

import type { IconProps, IconWeightComponent } from '../icon'
import { Icon } from '../icon'

const Regular: IconWeightComponent = ({ color }) => (
  <>
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={16}
      d="M200 56 56 200M200 200 56 56"
    />
  </>
)

const weights = {
  // duotone: Duotone,
  regular: Regular,
}

const CloseIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} alt="Close Icon" {...props} weights={weights} />
))

CloseIcon.displayName = 'CloseIcon'

export default CloseIcon
