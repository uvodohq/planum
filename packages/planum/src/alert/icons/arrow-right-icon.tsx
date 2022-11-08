import type { SVGProps } from 'react'

export function ArrowRightIcon(
  props: SVGProps<SVGSVGElement> & { size?: number },
) {
  return (
    <svg
      width={props?.size || 24}
      height={props?.size || 24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        d="M3.75 12h16.5M13.5 5.25 20.25 12l-6.75 6.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
