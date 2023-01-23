import type { SVGProps } from 'react'

interface Props extends SVGProps<SVGSVGElement> {
  size?: number
}

const CheckCircleIcon = ({ size = 24, ...rest }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill={'currentColor'}
    viewBox="0 0 256 256"
    {...rest}>
    <title>Check Circle Icon</title>
    <rect width="256" height="256" fill="none" />

    <polyline
      points="172 104 113.3 160 84 132"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle
      cx="128"
      cy="128"
      r="96"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
  </svg>
)

export default CheckCircleIcon
