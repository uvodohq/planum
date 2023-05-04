import { forwardRef } from 'react'

import type { IconProps, IconWeightComponent } from '../icon'
import { Icon } from '../icon'

const Regular: IconWeightComponent = ({ color }) => (
  <>
    <rect
      x="24"
      y="64"
      width="208"
      height="128"
      rx="16"
      transform="translate(256) rotate(90)"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle cx="128" cy="60" r="12" />
  </>
)

const weights = {
  // duotone: Duotone,
  regular: Regular,
}

const DeviceMobileCameraIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <Icon
      ref={ref}
      alt="Device Mobile Camera icon"
      {...props}
      weights={weights}
    />
  ),
)

DeviceMobileCameraIcon.displayName = 'DeviceMobileCameraIcon'

export default DeviceMobileCameraIcon
