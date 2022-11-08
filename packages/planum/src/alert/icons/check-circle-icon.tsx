import type { SVGProps } from 'react'

export function CheckCircleIcon(
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
        d="M16.125 9.75 10.622 15l-2.747-2.625"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
