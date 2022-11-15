import type { SVGProps } from 'react'

interface Props extends SVGProps<SVGSVGElement> {
  size?: number
}

export function PlusIcon(props: Props) {
  const { size = 16 } = props
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 256 256"
      {...props}>
      <path
        fill="currentColor"
        d="M224 128a8 8 0 0 1-8 8h-80v80a8 8 0 0 1-16 0v-80H40a8 8 0 0 1 0-16h80V40a8 8 0 0 1 16 0v80h80a8 8 0 0 1 8 8Z"></path>
    </svg>
  )
}
