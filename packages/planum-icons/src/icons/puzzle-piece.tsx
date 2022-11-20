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
      d="M64,216a8,8,0,0,1-8-8V165.3a27.6,27.6,0,0,1-14.1,2.6A28,28,0,1,1,56,114.7V72a8,8,0,0,1,8-8h46.7a27.6,27.6,0,0,1-2.6-14.1A28,28,0,1,1,161.3,64H208a8,8,0,0,1,8,8v42.7a27.6,27.6,0,0,0-14.1-2.6A28,28,0,1,0,216,165.3V208a8,8,0,0,1-8,8Z"
      opacity="0.2"
    />
    <path
      d="M64,216a8,8,0,0,1-8-8V165.3a27.6,27.6,0,0,1-14.1,2.6A28,28,0,1,1,56,114.7V72a8,8,0,0,1,8-8h46.7a27.6,27.6,0,0,1-2.6-14.1A28,28,0,1,1,161.3,64H208a8,8,0,0,1,8,8v42.7a27.6,27.6,0,0,0-14.1-2.6A28,28,0,1,0,216,165.3V208a8,8,0,0,1-8,8Z"
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
      d="M64,216a8,8,0,0,1-8-8V165.3a27.6,27.6,0,0,1-14.1,2.6A28,28,0,1,1,56,114.7V72a8,8,0,0,1,8-8h46.7a27.6,27.6,0,0,1-2.6-14.1A28,28,0,1,1,161.3,64H208a8,8,0,0,1,8,8v42.7a27.6,27.6,0,0,0-14.1-2.6A28,28,0,1,0,216,165.3V208a8,8,0,0,1-8,8Z"
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

export const PuzzlePieceIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase
      ref={ref}
      alt="Puzzle Piece Icon"
      {...props}
      renderPath={renderPath}
    />
  ),
)

PuzzlePieceIcon.displayName = 'PuzzlePieceIcon'
