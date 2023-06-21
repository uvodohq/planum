import { forwardRef } from 'react'

import type { IconProps, IconWeightComponent } from '../icon'
import { Icon } from '../icon'

const Regular: IconWeightComponent = ({ color }) => (
  <>
    <path d="M104,60A12,12,0,1,1,92,48,12,12,0,0,1,104,60Zm60,12a12,12,0,1,0-12-12A12,12,0,0,0,164,72ZM92,116a12,12,0,1,0,12,12A12,12,0,0,0,92,116Zm72,0a12,12,0,1,0,12,12A12,12,0,0,0,164,116ZM92,184a12,12,0,1,0,12,12A12,12,0,0,0,92,184Zm72,0a12,12,0,1,0,12,12A12,12,0,0,0,164,184Z" />
  </>
)

const weights = {
  // duotone: Duotone,
  regular: Regular,
}

const DotsSixVerticalIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <Icon ref={ref} alt="Six Vertical Dots Icon" {...props} weights={weights} />
  ),
)

DotsSixVerticalIcon.displayName = 'DotsSixVerticalIcon'

export default DotsSixVerticalIcon
