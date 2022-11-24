import type { SVGProps } from 'react'

interface Props extends SVGProps<SVGSVGElement> {
  size?: number
}

export function PhCaretDown(props: Props) {
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
        d="M128 184a8.5 8.5 0 0 1-5.7-2.3l-80-80a8.1 8.1 0 0 1 11.4-11.4l74.3 74.4l74.3-74.4a8.1 8.1 0 0 1 11.4 11.4l-80 80a8.5 8.5 0 0 1-5.7 2.3Z"></path>
    </svg>
  )
}
