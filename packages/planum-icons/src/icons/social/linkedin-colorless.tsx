import type { SVGProps } from 'react'

export const LinkedinColorlessIcon = (
  props: SVGProps<SVGSVGElement> & { size?: number },
) => (
  <svg
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 48 48"
    {...props}>
    <path
      d="M13.103 16.84a3.556 3.556 0 1 0 0-7.111 3.556 3.556 0 0 0 0 7.11ZM19.915 19.468h5.893v2.7s1.599-3.2 5.95-3.2c3.881 0 7.096 1.913 7.096 7.74v12.29h-6.106v-10.8c0-3.438-1.836-3.816-3.234-3.816-2.903 0-3.4 2.503-3.4 4.264v10.352h-6.199v-19.53ZM10.004 19.468h6.199v19.53h-6.2v-19.53Z"
      fill="#000"
    />
  </svg>
)
