import type { SVGProps } from 'react'

interface Props extends SVGProps<SVGSVGElement> {
  size?: number
}
export function PhUser(props: Props) {
  const { size } = props
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || 16}
      height={size || 16}
      viewBox="0 0 256 256"
      {...props}>
      <path
        fill="currentColor"
        d="M231.9 212a120.7 120.7 0 0 0-67.1-54.2a72 72 0 1 0-73.6 0A120.7 120.7 0 0 0 24.1 212a8 8 0 1 0 13.8 8a104.1 104.1 0 0 1 180.2 0a8 8 0 1 0 13.8-8ZM72 96a56 56 0 1 1 56 56a56 56 0 0 1-56-56Z"></path>
    </svg>
  )
}
