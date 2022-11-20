import { forwardRef } from 'react'

import type {
  IconProps,
  IconWeight,
  PaintFunction,
  RenderFunction,
} from '../iconbase'
import { IconBase, renderPathForWeight } from '../iconbase'

const pathsByWeight = new Map<IconWeight, PaintFunction>()

pathsByWeight.set('duotone', (color: string) => (
  <>
    <path
      d="M40,112H216v24a16,16,0,0,1-16,16H153.2a8,8,0,0,0-7.9,9.1L152,208a24,24,0,0,1-48,0l6.7-46.9a8,8,0,0,0-7.9-9.1H56a16,16,0,0,1-16-16Z"
      opacity="0.2"
    />
    <line
      x1="40"
      y1="112"
      x2="216"
      y2="112"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M102.8,152H56a16,16,0,0,1-16-16V64A32,32,0,0,1,72,32H216V136a16,16,0,0,1-16,16H153.2a8,8,0,0,0-7.9,9.1L152,208a24,24,0,0,1-48,0l6.7-46.9A8,8,0,0,0,102.8,152Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="184"
      y1="32"
      x2="184"
      y2="80"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
  </>
))

pathsByWeight.set('regular', (color: string) => (
  <>
    <line
      x1="40"
      y1="112"
      x2="216"
      y2="112"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M102.8,152H56a16,16,0,0,1-16-16V64A32,32,0,0,1,72,32H216V136a16,16,0,0,1-16,16H153.2a8,8,0,0,0-7.9,9.1L152,208a24,24,0,0,1-48,0l6.7-46.9A8,8,0,0,0,102.8,152Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="184"
      y1="32"
      x2="184"
      y2="80"
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

export const PaintBrushBroadIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase
      ref={ref}
      alt="Paint Brush Broad Icon"
      {...props}
      renderPath={renderPath}
    />
  ),
)

PaintBrushBroadIcon.displayName = 'PaintBrushBroadIcon'
