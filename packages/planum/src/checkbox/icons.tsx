import type { SVGProps } from 'react'
import * as React from 'react'

import { styled } from '../theme'

export const CheckSvgPath = styled('path', {
  strokeDasharray: 400,
  strokeDashoffset: 0,
})

type CheckIconProps = SVGProps<SVGSVGElement> & {
  disableInitialAnimation: boolean
}

export const CheckIcon = ({
  disableInitialAnimation,
  ...rest
}: CheckIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={14}
    viewBox="0 0 256 256"
    {...rest}>
    <path fill="none" d="M0 0h256v256H0z" />
    <CheckSvgPath
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={28}
      d="M216 72 104 184l-56-56"
      style={{
        // animationDuration: disableInitialAnimation ? '0s' : undefined,
        transition: 'all 400ms',
      }}
    />
  </svg>
)

export const MinusIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={14}
    viewBox="0 0 256 256"
    {...props}>
    <path fill="none" d="M0 0h256v256H0z" />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={28}
      d="M40 128h176"
    />
  </svg>
)
