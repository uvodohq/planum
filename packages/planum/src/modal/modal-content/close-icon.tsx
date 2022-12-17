import type { SVGProps } from 'react'

interface CloseIconProps extends SVGProps<SVGSVGElement> {
  size?: number
}

export function CloseIcon(props: CloseIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props?.size || 192}
      height={props?.size || 192}
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}>
      <rect width="256" height="256" fill="none"></rect>
      <line
        x1="200"
        y1="56"
        x2="56"
        y2="200"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"></line>
      <line
        x1="200"
        y1="200"
        x2="56"
        y2="56"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"></line>
    </svg>
  )
}
