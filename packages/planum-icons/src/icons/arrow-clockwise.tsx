import { forwardRef } from 'react'

import type {
  IconProps,
  IconWeight,
  PaintFunction,
  RenderFunction,
} from '../iconbase'
import { IconBase, renderPathForWeight } from '../iconbase'

const pathsByWeight = new Map<IconWeight, PaintFunction>()

pathsByWeight.set('regular', (color: string) => (
  <>
    <polyline
      points="176.2 99.7 224.2 99.7 224.2 51.7"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M190.2,190.2a88,88,0,1,1,0-124.4l34,33.9"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
  </>
))

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight)

export const ArrowClockwiseIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase
      ref={ref}
      alt="Arrow Clockwise Icon"
      {...props}
      renderPath={renderPath}
    />
  ),
)

ArrowClockwiseIcon.displayName = 'ArrowClockwiseIcon'
