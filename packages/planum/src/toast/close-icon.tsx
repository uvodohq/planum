import type { SVGProps } from 'react'
import * as React from 'react'

const CloseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={12}
    viewBox="0 0 256 256"
    {...props}>
    <path fill="none" d="M0 0h256v256H0z" />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={16}
      d="M200 56 56 200m144 0L56 56"
    />
  </svg>
)

export default CloseIcon
