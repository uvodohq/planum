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
    <circle cx="128" cy="64" r="12" />
    <circle cx="128" cy="192" r="12" />
  </>
))

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight)

export const DotsThreeVerticalIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase
      ref={ref}
      alt="Dots Three Vertical Icon"
      {...props}
      renderPath={renderPath}
    />
  ),
)

DotsThreeVerticalIcon.displayName = 'DotsThreeVerticalIcon'
