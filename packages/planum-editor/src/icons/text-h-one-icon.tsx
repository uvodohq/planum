import type { IconProps } from './type'

export function TextHOneIcon(props: IconProps) {
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
        d="M152 56v120a8 8 0 0 1-16 0v-52H48v52a8 8 0 0 1-16 0V56a8 8 0 0 1 16 0v52h88V56a8 8 0 0 1 16 0Zm71.8 44.9a8.3 8.3 0 0 0-8.2.4l-24 16a8 8 0 0 0 8.8 13.4l11.6-7.8V200a8 8 0 0 0 16 0v-92a8 8 0 0 0-4.2-7.1Z"></path>
    </svg>
  )
}
