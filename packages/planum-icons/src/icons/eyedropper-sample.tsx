import { forwardRef } from 'react'

import type {
  IconProps,
  IconWeight,
  PaintFunction,
  RenderFunction,
} from '@uvodohq/planum'
import { IconBase, renderPathForWeight } from '@uvodohq/planum'

const pathsByWeight = new Map<IconWeight, PaintFunction>()

pathsByWeight.set('regular', (color: string) => (
  <>
    <path
      d="M179.8,115.8l4.9,4.9a16.1,16.1,0,0,1,0,22.6l-7,7a8,8,0,0,1-11.4,0L105.7,89.7a8,8,0,0,1,0-11.4l7-7a16.1,16.1,0,0,1,22.6,0l4.9,4.9,27.6-27.6c10.8-10.8,28.4-11.4,39.4-.9a28,28,0,0,1,.6,40.1Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M158.6,142.6l-56,56a31.7,31.7,0,0,1-30.9,8.3L48.3,217.1a8,8,0,0,1-8.8-1.6h0a5.7,5.7,0,0,1-1.2-6.4l10.8-24.8a31.7,31.7,0,0,1,8.3-30.9l56-56"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="52.3"
      y1="160"
      x2="141.3"
      y2="160"
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

export const EyedropperSampleIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase
      ref={ref}
      alt="Eyedropper Sample Icon"
      {...props}
      renderPath={renderPath}
    />
  ),
)

EyedropperSampleIcon.displayName = 'EyedropperSampleIcon'
