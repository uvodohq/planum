import type { SVGProps } from 'react'

interface Props extends SVGProps<SVGSVGElement> {
  size?: number
}

const XCircleIcon = ({ size = 24, ...rest }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill={'currentColor'}
    viewBox="0 0 256 256"
    {...rest}>
    <title>X Circle Icon</title>
    <rect width="256" height="256" fill="none" />

    <circle
      cx="128"
      cy="128"
      r="96"
      fill="none"
      stroke="currentColor"
      strokeMiterlimit="10"
      strokeWidth="16"
    />
    <line
      x1="160"
      y1="96"
      x2="96"
      y2="160"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="160"
      y1="160"
      x2="96"
      y2="96"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
  </svg>
)

export default XCircleIcon
