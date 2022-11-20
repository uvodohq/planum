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
    <line
      x1="40"
      y1="128"
      x2="216"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="144 56 216 128 144 200"
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

export const ArrowRightIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase
      ref={ref}
      alt="Right arrow icon"
      {...props}
      renderPath={renderPath}
    />
  ),
)

ArrowRightIcon.displayName = 'ArrowRightIcon'
