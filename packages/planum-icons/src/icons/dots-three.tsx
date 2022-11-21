import { forwardRef } from 'react'

import type {
  IconProps,
  IconWeight,
  PaintFunction,
  RenderFunction,
} from '@uvodohq/planum'
import { IconBase, renderPathForWeight } from '@uvodohq/planum'

const pathsByWeight = new Map<IconWeight, PaintFunction>()

pathsByWeight.set('regular', () => (
  <>
    <circle cx="128" cy="128" r="12" />
    <circle cx="192" cy="128" r="12" />
    <circle cx="64" cy="128" r="12" />
  </>
))

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight)

export const DotsThreeIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase
      ref={ref}
      alt="Three Dots Icon"
      {...props}
      renderPath={renderPath}
    />
  ),
)

DotsThreeIcon.displayName = 'DotsThreeIcon'
