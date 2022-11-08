import type { SVGProps } from 'react'

export function InfoIcon(props: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg
      width={props?.size || 24}
      height={props?.size || 24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.25 11.25H12v5.25h.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.813 9a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z"
        fill="currentColor"
      />
    </svg>
  )
}
