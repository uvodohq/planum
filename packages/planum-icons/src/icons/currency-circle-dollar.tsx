import { forwardRef } from 'react'

import type { IconProps, IconWeightComponent } from '../icon'
import { Icon } from '../icon'

const Regular: IconWeightComponent = ({ color }) => (
  <>
    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm40-68a28,28,0,0,1-28,28h-4v8a8,8,0,0,1-16,0v-8H104a8,8,0,0,1,0-16h36a12,12,0,0,0,0-24H116a28,28,0,0,1,0-56h4V72a8,8,0,0,1,16,0v8h16a8,8,0,0,1,0,16H116a12,12,0,0,0,0,24h24A28,28,0,0,1,168,148Z" />
  </>
)

const weights = {
  // duotone: Duotone,
  regular: Regular,
}

const CurrencyCircleDollarIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <Icon
      ref={ref}
      alt="Currency circle dollar Icon"
      {...props}
      weights={weights}
    />
  ),
)

CurrencyCircleDollarIcon.displayName = 'CurrencyCircleDollarIcon'

export default CurrencyCircleDollarIcon
