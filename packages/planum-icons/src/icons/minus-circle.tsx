import { forwardRef } from 'react'

import type { IconProps, IconWeightComponent } from '../icon'
import { Icon } from '../icon'

const Regular: IconWeightComponent = ({ color }) => (
  <>
    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Z" />
  </>
)

const weights = {
  // duotone: Duotone,
  regular: Regular,
}

const MinusCircleIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} alt="MinusCircle Icon" {...props} weights={weights} />
))

MinusCircleIcon.displayName = 'MinusCircleIcon'

export default MinusCircleIcon
