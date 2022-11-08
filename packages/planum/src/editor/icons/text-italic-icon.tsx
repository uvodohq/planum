import type { SVGProps } from 'react'

interface TextItalicIconProps extends SVGProps<SVGSVGElement> {
  size?: number
}

export function TextItalicIcon(props: TextItalicIconProps) {
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
        d="M200 56a8 8 0 0 1-8 8h-34.2l-42.7 128H144a8 8 0 0 1 0 16H64a8 8 0 0 1 0-16h34.2l42.7-128H112a8 8 0 0 1 0-16h80a8 8 0 0 1 8 8Z"></path>
    </svg>
  )
}
