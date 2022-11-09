import type { SVGProps } from 'react'
import * as React from 'react'

export const DotsThreeIcon = (
  props: SVGProps<SVGSVGElement> & { size?: number },
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 256 256"
    {...props}>
    <path fill="none" d="M0 0h256v256H0z" />
    <circle cx={128} cy={128} r={12} fill="currentColor" />
    <circle cx={192} cy={128} r={12} fill="currentColor" />
    <circle cx={64} cy={128} r={12} fill="currentColor" />
  </svg>
)
