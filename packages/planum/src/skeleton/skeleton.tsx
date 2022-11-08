import type { HTMLAttributes } from 'react'

import type { CSS } from '../theme'
import {
  Rect,
  RectInner,
  SkeletonCard,
  SkeletonDescription,
  SkeletonImg,
} from './skeleton.styles'

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * should show square image loader
   *
   * @default false
   */
  image?: boolean

  /**
   * Only show one line paragraph, not two
   */
  oneTextLine?: boolean

  /**
   * Disable animation - it will be false in reduced motion mode
   * @default true
   */
  animated?: boolean

  /**
   * Used to hide or show text parts of the skeleton
   */
  showText?: boolean
  /**
   * Used to change the background color of the skeleton
   */
  color?: string
  css?: CSS
}

function getRandomIntBetween(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export const Skeleton = ({
  image,
  color,
  oneTextLine,
  animated = true,
  showText = true,
  ...rest
}: SkeletonProps) => {
  return (
    <SkeletonCard
      animated={animated}
      role="progressbar"
      aria-busy="true"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuetext="loading"
      {...rest}>
      {image && (
        <SkeletonImg
          data-testid="skeleton-img"
          css={{ backgroundColor: `${color} !important` }}
        />
      )}
      {showText && (
        <SkeletonDescription>
          <Rect style={{ width: `${getRandomIntBetween(30, 80)}%` }}>
            <RectInner css={{ backgroundColor: `${color} !important` }} />
          </Rect>
          {!oneTextLine && (
            <Rect style={{ width: '20%' }}>
              <RectInner css={{ backgroundColor: `${color} !important` }} />
            </Rect>
          )}
        </SkeletonDescription>
      )}
    </SkeletonCard>
  )
}
