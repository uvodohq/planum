import type { SVGProps } from 'react'

interface TextHTwoIconProps extends SVGProps<SVGSVGElement> {
  size?: number
}

export function TextHTwoIcon(props: TextHTwoIconProps) {
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
        d="M152 56v120a8 8 0 0 1-16 0v-52H48v52a8 8 0 0 1-16 0V56a8 8 0 0 1 16 0v52h88V56a8 8 0 0 1 16 0Zm88 136h-32l34.3-45.8l.2-.3A31.8 31.8 0 0 0 248 128a32 32 0 0 0-61.5-12.5a8 8 0 0 0 14.8 6.3A15.9 15.9 0 0 1 216 112a16 16 0 0 1 13.4 24.8l-43.7 58.3a7.5 7.5 0 0 0-1.7 4.9a8 8 0 0 0 5.5 7.6a7.3 7.3 0 0 0 2.5.4h48a8 8 0 0 0 0-16Z"></path>
    </svg>
  )
}
