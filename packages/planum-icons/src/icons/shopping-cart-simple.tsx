import { forwardRef } from 'react'

import type { IconProps, IconWeightComponent } from '../icon'
import { Icon } from '../icon'

const Regular: IconWeightComponent = ({ color }) => (
  <>
    <circle cx="80" cy="216" r="16" />
    <circle cx="184" cy="216" r="16" />
    <path
      d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8"
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

const ShoppingCartSimpleIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <Icon
      ref={ref}
      alt="Shopping Cart Simple Icon"
      {...props}
      weights={weights}
    />
  ),
)

ShoppingCartSimpleIcon.displayName = 'ShoppingCartSimpleIcon'

export default ShoppingCartSimpleIcon
