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
    <path d="M96,96v16a32,32,0,0,1-64,0V96" opacity="0.2" />
    <path d="M224,96v16a32,32,0,0,1-64,0V96" opacity="0.2" />
    <path
      d="M48,139.6V208a8,8,0,0,0,8,8H200a8,8,0,0,0,8-8V139.6"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M54,40H202a8.1,8.1,0,0,1,7.7,5.8L224,96H32L46.3,45.8A8.1,8.1,0,0,1,54,40Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M96,96v16a32,32,0,0,1-64,0V96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M160,96v16a32,32,0,0,1-64,0V96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M224,96v16a32,32,0,0,1-64,0V96"
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
    <path
      d="M48,139.6V208a8,8,0,0,0,8,8H200a8,8,0,0,0,8-8V139.6"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M54,40H202a8.1,8.1,0,0,1,7.7,5.8L224,96H32L46.3,45.8A8.1,8.1,0,0,1,54,40Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M96,96v16a32,32,0,0,1-64,0V96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M160,96v16a32,32,0,0,1-64,0V96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M224,96v16a32,32,0,0,1-64,0V96"
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

export const StorefrontIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase
      ref={ref}
      alt="StorefrontIcon"
      {...props}
      renderPath={renderPath}
    />
  ),
)

StorefrontIcon.displayName = 'StorefrontIcon'
