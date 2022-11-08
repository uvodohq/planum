import type { SVGProps } from 'react'

interface TextStrikethroughIconProps extends SVGProps<SVGSVGElement> {
  size?: number
}

export function TextStrikethroughIcon(props: TextStrikethroughIconProps) {
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
        d="M224 128a8 8 0 0 1-8 8h-40.1c9.2 7.1 16.1 17.2 16.1 32s-7 25.7-19.8 34.8S144.6 216 128 216s-32.3-4.7-44.2-13.2S64 181.3 64 168a8 8 0 0 1 16 0c0 17.3 22 32 48 32s48-14.7 48-32c0-14.9-10.5-23.6-38.8-32H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8ZM76.3 104a6.9 6.9 0 0 0 2.5-.4a8 8 0 0 0 5.1-10.1a19.2 19.2 0 0 1-.8-5.5c0-18.2 19.3-32 44.9-32c19.5 0 36.1 8.3 42.3 21a8.1 8.1 0 0 0 10.7 3.7a7.9 7.9 0 0 0 3.7-10.7c-9-18.5-30.7-30-56.7-30c-34.7 0-60.9 20.6-60.9 48a36 36 0 0 0 1.6 10.5a8 8 0 0 0 7.6 5.5Z"></path>
    </svg>
  )
}
