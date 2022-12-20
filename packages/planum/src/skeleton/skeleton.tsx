import { useRef } from 'react'

import {
  Rect,
  RectInner,
  SkeletonCard,
  SkeletonDescription,
  SkeletonImg,
} from './skeleton.styles'
import type { SkeletonProps } from './skeleton.type'

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
  const randomWidth = useRef(getRandomIntBetween(30, 80))

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
          <Rect style={{ width: `${randomWidth.current}%` }}>
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
