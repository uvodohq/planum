import type { SVGProps } from 'react'

interface PaletteIconProps extends SVGProps<SVGSVGElement> {
  size?: number
}

export function PaletteIcon(props: PaletteIconProps) {
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
        d="M200.8 53.9A103.4 103.4 0 0 0 128 24h-1.1a104 104 0 0 0-33.5 202.1a32 32 0 0 0 42.6-30.2V192a16 16 0 0 1 16-16h46.2a31.7 31.7 0 0 0 31.2-24.9a101.5 101.5 0 0 0 2.6-24a102.9 102.9 0 0 0-31.2-73.2Zm13 93.7a15.9 15.9 0 0 1-15.6 12.4H152a32.1 32.1 0 0 0-32 32v3.9A16 16 0 0 1 98.7 211A88.2 88.2 0 0 1 40 128a88.1 88.1 0 0 1 87.1-88h.9a88.3 88.3 0 0 1 88 87.2a86.8 86.8 0 0 1-2.2 20.4ZM140 76a12 12 0 1 1-12-12a12 12 0 0 1 12 12Zm-46.6 32A12 12 0 1 1 89 91.6a12.1 12.1 0 0 1 4.4 16.4Zm0 40a12 12 0 1 1-16.4-4.4a12.1 12.1 0 0 1 16.4 4.4Zm90-52a12 12 0 1 1-16.4-4.4a12 12 0 0 1 16.4 4.4Z"></path>
    </svg>
  )
}
