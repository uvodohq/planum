import type { SVGProps } from 'react'

interface ListBulletsIconProps extends SVGProps<SVGSVGElement> {
  size?: number
}

export function ListBulletsIcon(props: ListBulletsIconProps) {
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
        d="M80 64a8 8 0 0 1 8-8h128a8 8 0 0 1 0 16H88a8 8 0 0 1-8-8Zm136 56H88a8 8 0 0 0 0 16h128a8 8 0 0 0 0-16Zm0 64H88a8 8 0 0 0 0 16h128a8 8 0 0 0 0-16ZM44 52a12 12 0 1 0 12 12a12 12 0 0 0-12-12Zm0 64a12 12 0 1 0 12 12a12 12 0 0 0-12-12Zm0 64a12 12 0 1 0 12 12a12 12 0 0 0-12-12Z"></path>
    </svg>
  )
}
