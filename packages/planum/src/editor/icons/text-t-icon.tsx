import type { SVGProps } from 'react'

interface TextTIconProps extends SVGProps<SVGSVGElement> {
  size?: number
}

export function TextTIcon(props: TextTIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={props?.size || 24}
      height={props?.size || 24}
      viewBox="0 0 256 256"
      {...props}>
      <path
        fill="currentColor"
        d="M216 56v32a8 8 0 0 1-16 0V64h-64v128h24a8 8 0 0 1 0 16H96a8 8 0 0 1 0-16h24V64H56v24a8 8 0 0 1-16 0V56a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8Z"></path>
    </svg>
  )
}
