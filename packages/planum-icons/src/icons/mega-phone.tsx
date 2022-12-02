import { forwardRef } from 'react'

import type { IconProps, IconWeightComponent } from '../icon'
import { Icon } from '../icon'

const Regular: IconWeightComponent = ({ color }) => (
  <>
    <path
      d="M152,80V203.7a7.9,7.9,0,0,0,3.6,6.7l11,7.3a8,8,0,0,0,12.2-4.7L192,160"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M192,160a40,40,0,0,0,0-80H152S97.5,80,45.1,36.1A8,8,0,0,0,32,42.2V197.8a8,8,0,0,0,13.1,6.1C97.5,160,152,160,152,160Z"
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

const MegaPhoneIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} alt="Mega Phone icon" {...props} weights={weights} />
))

MegaPhoneIcon.displayName = 'MegaPhoneIcon'

export default MegaPhoneIcon
