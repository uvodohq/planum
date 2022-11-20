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
    <path d="M56,224V40a8,8,0,0,1,8-8H192a8,8,0,0,1,8,8V224Z" opacity="0.2" />
    <line
      x1="24"
      y1="224"
      x2="232"
      y2="224"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M56,224V40a8,8,0,0,1,8-8H192a8,8,0,0,1,8,8V224"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle cx="156" cy="128" r="12" />
  </>
))

pathsByWeight.set('regular', (color: string) => (
  <>
    <line
      x1="24"
      y1="224"
      x2="232"
      y2="224"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M56,224V40a8,8,0,0,1,8-8H192a8,8,0,0,1,8,8V224"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle cx="156" cy="128" r="12" />
  </>
))

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight)

export const DoorIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} alt="Door Icon" {...props} renderPath={renderPath} />
))

DoorIcon.displayName = 'DoorIcon'
