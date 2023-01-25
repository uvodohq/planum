import type { SVGProps } from 'react'

import { styled } from '../../theme'

export const CheckSvgPath = styled('path', {
  strokeDasharray: 400,
  strokeDashoffset: 0,
})

type CheckIconProps = SVGProps<SVGSVGElement> & {}

export const CheckIcon = (props: CheckIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    viewBox="0 0 256 256"
    {...props}>
    <path fill="none" d="M0 0h256v256H0z" />
    <CheckSvgPath
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={28}
      d="M216 72 104 184l-56-56"
    />
  </svg>
)
